const ai = require("./geminiClient");

async function generateOpportunityReason(opportunity) {
  const prompt = `
You are an AI business assistant for Myntra sellers.

Explain this business opportunity in simple language.

Opportunity Title:
${opportunity.title}

Category:
${opportunity.category}

Confidence:
${opportunity.confidence}%

Expected Demand:
${opportunity.expectedDemand}

Expected Revenue:
₹${opportunity.expectedRevenue}

Existing Reason:
${opportunity.reasoning}

Respond with:
- Why this opportunity matters
- Why the seller should act now

Keep it under 100 words.
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return response.text;
}

module.exports = {
  generateOpportunityReason,
};