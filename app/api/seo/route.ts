import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const { website } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
You are SitePilot AI SEO Expert.

Analyze this website:

${website}

Return:

- SEO Score (/100)
- SEO Title
- Meta Description
- Missing Keywords
- Heading Improvements
- Technical SEO Issues
- Page Speed Suggestions
- 10 Focus Keywords
- Action Plan
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
