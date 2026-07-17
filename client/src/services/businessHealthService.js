const API_BASE_URL = "http://localhost:5000/api";

export async function getBusinessHealth() {
  const response = await fetch(
    `${API_BASE_URL}/business-health`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch business health");
  }

  return response.json();
}