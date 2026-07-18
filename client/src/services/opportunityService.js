const API_BASE_URL = "http://localhost:5000/api";

export async function getOpportunities() {
  const response = await fetch(`${API_BASE_URL}/opportunities`);

  if (!response.ok) {
    throw new Error("Failed to fetch opportunities");
  }

  return response.json();
}

export async function explainOpportunity(id) {
  const response = await fetch(
    `${API_BASE_URL}/ai/opportunities/${id}/explain`
  );

  if (!response.ok) {
    throw new Error("Failed to generate AI explanation");
  }

  return response.json();
}

export async function getDemandPrediction(productId) {
  const response = await fetch(
    `${API_BASE_URL}/ai/products/${productId}/demand`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch demand prediction");
  }

  return response.json();
}