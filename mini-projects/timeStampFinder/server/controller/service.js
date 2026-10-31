import { Groq } from 'groq-sdk';
import dotenv from 'dotenv'
import { cos_sim, pipeline,env } from "@huggingface/transformers";
import { QdrantClient } from '@qdrant/js-client-rest';
import data from '../data/videoTranscript.js';


dotenv.config()
env.allowRemoteModels = false;
env.localModelPath = "../models/";

const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
);

const qdrant = new QdrantClient({
    url:process.env.QDRANT_URL,
    apiKey:process.env.QDRANT_API_KEY
})
const getEmbedding = async (text) => {
    const output = await extractor(text, {
        pooling: "mean",
        normalize: true
    });
    if (Array.isArray(text)) {
        return output.tolist();
    }
    return Array.from(output.data);
};


const COLLECTION="transcript";
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

}

async function storeText(points){
    
    try{
    await qdrant.upsert(COLLECTION,{
        points : points
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
    const query = "Hello everyone, welcome to my channel,";
    const query_emb = await getEmbedding(query);
//    const data_emb = await getEmbedding(
//     data.map(chunk => chunk.text)
//    )
//    const points = data.map((chunk,index)=>({
//         id:index+1,
//         vector:data_emb[index],
//         payload:{
//             time:chunk.time,
//             text:chunk.text
//         }
//     }))
//     await storeText(points);
    const context = await qdrant.query(COLLECTION,{
        query:query_emb,
        limit:3,
        with_payload:true
    });
    const combinedContext = context.points
    .map(point => point.payload.text)
    .join("\n");
    console.log(context.points);
    //askLLM(query,combinedContext);
}

main().catch(console.error);


