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
You are SitePilot AI Website Builder.

Create a premium website based on this request:

${prompt}

Return:
- Website Name
- Color Palette
- Hero Section
- Features
- Call To Action
- Footer
- SEO Title
- SEO Description
`,
    });

    return Response.json({
      success: true,
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
