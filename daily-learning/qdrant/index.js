import {Groq} from 'groq-sdk'
import dotenv from 'dotenv'
import { cos_sim, pipeline,env } from "@huggingface/transformers";
import { QdrantClient } from '@qdrant/js-client-rest';
import document from './data.js';

dotenv.config()
env.allowRemoteModels = false;
env.localModelPath = "./models/";

const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
);

const getEmbedding = async (text) => {
    const output = await extractor(text, {
        pooling: "mean",
        normalize: true
    });
    return Array.from(output.data);
};

const qdrant = new QdrantClient({
    url:process.env.QDRANT_URL,
    apiKey:process.env.QDRANT_API_KEY
})
const COLLECTION="knowledge";
async function createCollection(){
    const collections = await qdrant.getCollections();
    const exists = collections.collections.some(
    (c) => c.name === COLLECTION
  );

  if (exists) {
    await qdrant.deleteCollection(COLLECTION);
  }
    await qdrant.createCollection(COLLECTION,{
        vectors:{
            size:384,
            distance:"Cosine"
        }
    })

    await qdrant.createPayloadIndex(COLLECTION,{
        field_name:"category",
        field_schema:"keyword"
    })
    await qdrant.createPayloadIndex(COLLECTION,{
        field_name:"is_active",
        field_schema:'bool'
    })
}

async function storeText(id,payload){
    const vector = await getEmbedding(payload.text);
    try{
    await qdrant.upsert(COLLECTION,{
        points : [
            {
                id:id,
                vector:vector,
                payload:payload
            }
        ]
    });
}catch(err){
    console.log(err)
}
}





const askLLM = async (userPrompt,context)=>{
    const groq  = new Groq({api_key:process.env.GROQ_API_KEY});
    const model = "openai/gpt-oss-20b";
            let messages = [
                {
                    "role":"system",
                    "content":`Answer the user Query strictly based on the context:${context}.Do not invent answer from yourself if it not relevant just say i dont have an idea about that.`
                },
                {
                    "role":"user",
                    "content":userPrompt
                }
            ]
    const response = await groq.chat.completions.create({model:model,messages:messages});
    const data =  response.choices[0]?.message?.content;
    console.log(data);
}
async function main() {
    
    await createCollection();
    const query = "How many vaccations days do I get?";
    const query_emb = await getEmbedding(query);
    let id=1;
    for(const doc of document){
        await storeText(id,doc)
        id+=1
    }
    const rembiursement_filter = {
        must:[
            {
                key:"category",
                match:{
                    value:"leave"
                }
            },
            {
                key:"is_active",
                match:{
                    value:true
                }
            }
        ]
    }
    const context = await qdrant.query(COLLECTION,{
        query:query_emb,
        filter:rembiursement_filter,
        limit:3,
        with_payload:true
    });
    const combinedContext = context.points
    .map(point => point.payload.text)
    .join("\n");
    askLLM(query,combinedContext);
}

main().catch(console.error);
