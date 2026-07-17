const BASE_URL = "http://localhost:5000";

export async function getLiveSessions() {
  const response = await fetch(`${BASE_URL}/api/live`);

  if (!response.ok) {
    throw new Error("Failed to fetch live sessions");
  }

  return response.json();
}