// generate.js
import OpenAI from "openai";

// Apni API key environment variable se load karo
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // ya yaha direct key daal sakte ho (recommended nahi)
});

// Ye function content generate karega
export async function generateContent(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // latest supported model
      messages: [
        { role: "user", content: prompt } // user ka input
      ],
      temperature: 0.7, // creativity level
      max_tokens: 500,   // output ka size
    });

    // Response se generated text return karo
    return response.choices[0].message.content;

  } catch (error) {
    console.error("AI generate error:", error);
    return "Sorry, AI generate nahi kar paaya. Check API key ya backend.";
  }
}

// Example usage (agar direct test karna ho)
if (require.main === module) {
  (async () => {
    const result = await generateContent("Hello AI, write a short blog about technology.");
    console.log(result);
  })();
}
