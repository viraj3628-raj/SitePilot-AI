import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const { topic } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are SitePilot AI Blog Writer.

Write a professional SEO blog about:

${topic}

Include:
- SEO Title
- Meta Description
- Introduction
- Headings (H2/H3)
- Conclusion
- 10 SEO Keywords
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
