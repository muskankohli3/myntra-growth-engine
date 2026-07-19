const API_BASE_URL = "http://localhost:5000/api/live-sessions";

export async function getLiveSessions() {
  const response = await fetch(API_BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch live sessions");
  }

  return response.json();
}

export async function getLiveSessionById(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch live session");
  }

  return response.json();
}

export async function startLiveSession(id) {
  const response = await fetch(`${API_BASE_URL}/${id}/start`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Failed to start live session");
  }

  return response.json();
}