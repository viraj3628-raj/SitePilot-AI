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
You are SitePilot AI Analytics Expert.

Analyze this website:

${website}

Return:

- Overall Performance Score
- SEO Health
- Traffic Insights
- User Experience
- Core Web Vitals Suggestions
- Top Improvements
- Final Recommendation
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
