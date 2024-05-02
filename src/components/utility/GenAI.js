import { GoogleGenerativeAI } from "@google/generative-ai";
import { promptData } from "./Constants";
import { GENERATIVE_AI_API_KEY } from "../../environment";

const GenAI = async (
  selectedProduct,
  genData,
  setGenData,
  product,
  selectedIndustry
) => {
  const filteredPrompt = promptData.find(
    (data) => data?.category === product
  )?.prompts;
  console.log("filteredPrompt", filteredPrompt);
  const selectedPrompt = filteredPrompt.find(
    (prompt) => prompt?.question === selectedProduct
  )?.answer;
  console.log("selectedPrompt", selectedPrompt);
  const prompt = selectedPrompt.replace("[enter your niche]", selectedIndustry);

  console.log("finalPrompt", prompt);
  console.log("process.env  - ", process.env);
  // const generativeApiKey = process.env.REACT_APP_GENERATIVE_AI_API_KEY;

  console.log("API_KEY", GENERATIVE_AI_API_KEY); // This will log "AIzaSyBbO7fbc3toMsNeM"

  // console.log("API_KEY", API_KEY);

  const genAI = new GoogleGenerativeAI(GENERATIVE_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  console.log("result", result);
  return result;
};

export default GenAI;
