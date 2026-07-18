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