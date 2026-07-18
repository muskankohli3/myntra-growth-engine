const API_BASE_URL = "http://localhost:5000/api";

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
}

export async function getLiveSessions() {
  const response = await fetch(`${API_BASE_URL}/live-sessions`);

  if (!response.ok) {
    throw new Error("Failed to fetch live sessions");
  }

  return await response.json();
}