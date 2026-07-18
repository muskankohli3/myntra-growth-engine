const ai = require("./geminiClient");

async function generateReviveSuggestion(product) {
  const prompt = `
You are an AI growth assistant for Myntra sellers.

A product is underperforming.

Product Details:

Name: ${product.name}
Brand: ${product.brand}
Category: ${product.category}
Price: ₹${product.price}
Stock: ${product.stock}

Suggest practical ways to revive this product.

Respond ONLY in JSON:

{
  "problem": "...",
  "suggestions": [
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

  const cleaned = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

  return JSON.parse(cleaned);
}

module.exports = {
  generateReviveSuggestion,
};