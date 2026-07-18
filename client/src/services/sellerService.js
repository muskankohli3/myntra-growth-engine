import opportunities from "./mockOpportunityData";
import aiSuggestions from "./mockAISuggestions";

export function getMockOpportunities() {
  return opportunities;
}

export function getMockBusinessHealth() {
  return {
    orders: 124,
    revenue: "₹42.8K",
    returns: 8,
    pendingPayments: "₹7.3K",
  };
}

export function getMockGrowthScore() {
  return {
    score: 68,
    recommendations: [
      "Go Live Today",
      "Improve Product Images",
      "Complete Size Chart",
      "Increase Inventory",
    ],
  };
}

export function getMockRecentLiveSession() {
  return {
    product: "Linen Kurta",
    revenue: "₹12,450",
    viewers: 814,
    duration: "42 min",
  };
}

export function getMockAISuggestions() {
  return aiSuggestions;
}

const API_BASE_URL = "http://localhost:5000/api";

export async function getReviveSuggestion(productId) {
  const response = await fetch(
    `${API_BASE_URL}/ai/products/${productId}/revive`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch AI revive suggestion");
  }

  return response.json();
}

export async function getAnalyticsInsights() {
  const response = await fetch(
    `${API_BASE_URL}/ai/analytics/insights`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch analytics insights");
  }

  return response.json();
}