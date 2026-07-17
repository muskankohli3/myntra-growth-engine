const API_BASE_URL = "http://localhost:5000/api";

export async function getOpportunities() {
  const response = await fetch(`${API_BASE_URL}/opportunities`);

  if (!response.ok) {
    throw new Error("Failed to fetch opportunities");
  }

  return response.json();
}