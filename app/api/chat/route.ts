import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const { message } = await req.json();

    const response = await ai.models.generateContent({
   model: "gemini-flash-latest",
      contents: message,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
