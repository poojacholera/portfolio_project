import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a vegetarian recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const apitoken = import.meta.env.VITE_HF_ACCESS_TOKEN;
const hf= new HfInference(apitoken);
//@ts-ignore
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (error) {
        const err = error as Error;
        console.error(err.message)
    }
}

// https://huggingface.co/docs/api-inference/en/getting-started
//import fetch from "node-fetch";

// export async function getRecipeFromHF(ingredientsArr) {

//     const ingredientsString = ingredientsArr.join(", ")
//     const msg= `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;
//     const data= SYSTEM_PROMPT + msg;

//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
//         {
//             method: "POST",
//             headers: {
//                 Authorization: hf,
//                 "Content-Type": "application/json",
//                 "x-use-cache": "false",
//                 "x-wait-for-model": "true"
//             },
        
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.json();
//     return result;
// }

