import OpenAI from "openai";
import { companyKnowledge } from "@/lib/knowledge_base";

// Initialize Groq (Uses the existing OpenAI SDK)
const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid messages format" }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "Groq API key is missing. Please add it to your .env file." },
        { status: 500 }
      );
    }

    // Format messages for the API
    const formattedMessages = [
      { role: "system", content: companyKnowledge },
      ...messages.map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      })),
    ];

    const completion = await openai.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.3-70b-versatile", // Lightning fast and completely free on Groq
      temperature: 0.7,
    });

    return Response.json({
      message: completion.choices[0].message.content,
      source: "groq",
    });

  } catch (error) {
    console.error("Chatbot API Error:", error);
    return Response.json(
      { error: "An unexpected error occurred processing your message.", details: error.message },
      { status: 500 }
    );
  }
}
