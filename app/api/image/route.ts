import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const { prompt } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are SitePilot AI Image Prompt Generator.

Create a detailed AI image generation prompt for:

${prompt}

Return:
- Main Prompt
- Negative Prompt
- Style
- Camera
- Lighting
- Aspect Ratio
- Quality Settings
`,
    });

    return Response.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
