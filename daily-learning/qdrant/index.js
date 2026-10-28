import {Groq} from 'groq-sdk'
import dotenv from 'dotenv'
import { cos_sim, pipeline,env } from "@huggingface/transformers";
import { QdrantClient } from '@qdrant/js-client-rest';

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
    console.log("Collection already exists");
    return;
  }
    await qdrant.createCollection(COLLECTION,{
        vectors:{
            size:384,
            distance:"Cosine"
        }
    })
}

async function storeText(id,text){
    const vector = await getEmbedding(text);
    try{
    await qdrant.upsert(COLLECTION,{
        points : [
            {
                id:id,
                vector:vector,
                payload:{
                    text:text
                }
            }
        ]
    });
}catch(err){
    console.log(err)
}
}


const document = [
    "Employees receive 24 days of paid leave per year.",
    "Employees work from the office on Tuesday, Wednesday and Thursday. ",
    "Monday and Friday are optional work-from-home days.",
    "Employees receive Rs 3000 per month for gym reimbursement.",
    "Employees can claim Rs 2000 per month for home internet.",
    "Employees have a 90 day notice period."
    ]


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
    const query = "How much holidays i get";
    const query_emb = await getEmbedding(query);
    let id=1;
    for(const line of document){
        await storeText(id,line)
        id+=1
    }
    const context = await qdrant.query(COLLECTION,{
        query:query_emb,
        limit:3,
        with_payload:true
    });
    const combinedContext = context.points
    .map(point => point.payload.text)
    .join("\n");
    askLLM(query,combinedContext);
}

main().catch(console.error);
