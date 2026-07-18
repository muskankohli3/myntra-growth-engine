const ai = require("./geminiClient");

async function generateDemandPrediction(product) {
  const prompt = `
You are an AI assistant for Myntra sellers.

Predict demand for the following product over the next 7 days.

Product:
${product.name}

Category:
${product.category}

Brand:
${product.brand}

Current Price:
₹${product.price}

Current Stock:
${product.stock}

Respond in JSON only with this format:
{
  "prediction": "...",
  "confidence": "...",
  "recommendation": "..."
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return JSON.parse(response.text);
}

module.exports = {
  generateDemandPrediction,
};