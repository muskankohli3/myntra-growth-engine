const ai = require("./geminiClient");

async function generateAnalyticsInsights(analytics) {
  const prompt = `
You are an AI business analyst for Myntra sellers.

Analyze these metrics:

Revenue: ₹${analytics.revenue}
Orders: ${analytics.orders}
Conversion Rate: ${analytics.conversionRate}%
Top Products:
${analytics.topProducts
  .map((p) => `- ${p.name}`)
  .join("\n")}

Provide concise business insights.

Respond ONLY in JSON:

{
  "summary": "...",
  "strengths": [
    "...",
    "..."
  ],
  "recommendations": [
    "...",
    "...",
    "..."
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return JSON.parse(response.text);
}

module.exports = {
  generateAnalyticsInsights,
};