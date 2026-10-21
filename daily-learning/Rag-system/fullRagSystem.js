import {Groq} from 'groq-sdk'
import dotenv from 'dotenv'
import { cos_sim, pipeline,env } from "@huggingface/transformers";

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
    return output.data;
};
const document = [
    "Employees receive 24 days of paid leave per year.",
    "Employees work from the office on Tuesday, Wednesday and Thursday. ",
    "Monday and Friday are optional work-from-home days.",
    "Employees receive Rs 3000 per month for gym reimbursement.",
    "Employees can claim Rs 2000 per month for home internet.",
    "Employees have a 90 day notice period."
    ]

const getSimilarityScore = async (document_emb,query_emb) =>{
    let scores = [];
    for(let i=0;i<document_emb.length;i++){
        const score = await cos_sim(document_emb[i],query_emb);
        scores.push({score:score,text:document[i]});
    }
    scores.sort((a,b)=> b.score - a.score);
    return scores;
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
    
    let document_emb = [];
    const query = "How much vaccations i get";
    const query_emb = await getEmbedding(query);
    for(const line of document){
        const emb = await getEmbedding(line);
        document_emb.push(emb);
    }

    const scores = await getSimilarityScore(document_emb,query_emb);
    const context = scores[0].text;
    askLLM(query,context);
}

main();
