const API_BASE_URL = "http://localhost:5000/api";

export async function getAnalytics() {
  const response = await fetch(`${API_BASE_URL}/analytics`);

  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }

  return response.json();
}