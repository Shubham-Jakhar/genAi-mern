
import { cos_sim, pipeline,env } from "@huggingface/transformers";

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

async function main() {
    const text1 = "hii";
    const text2 = "hello";

    const emb1 = await getEmbedding(text1);
    const emb2 = await getEmbedding(text2);

    console.log("Cosine similarity:", cos_sim(emb1, emb2));
}

main();
