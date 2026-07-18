import { useState } from "react";
import Card from "./ui/Card";
import {
  explainOpportunity,
  getDemandPrediction,
} from "../services/opportunityService";

function OpportunityCard({ opportunity }) {
  const isTopPick = opportunity.priority === "HIGH";

  const [loadingAI, setLoadingAI] = useState(false);
  const [aiExplanation, setAIExplanation] = useState("");
  const [showAI, setShowAI] = useState(false);

  const [loadingDemand, setLoadingDemand] = useState(false);
  const [demandPrediction, setDemandPrediction] = useState(null);
  const [showDemand, setShowDemand] = useState(false);

  async function handleExplain() {
    if (showAI) {
      setShowAI(false);
      return;
    }

    if (aiExplanation) {
      setShowAI(true);
      return;
    }

    try {
      setLoadingAI(true);

      const data = await explainOpportunity(opportunity._id);

      setAIExplanation(data.explanation);
      setShowAI(true);
    } catch (error) {
      console.error(error);
      alert("Failed to generate AI explanation.");
    } finally {
      setLoadingAI(false);
    }
  }

  async function handleDemandPrediction() {
    if (showDemand) {
      setShowDemand(false);
      return;
    }

    if (demandPrediction) {
      setShowDemand(true);
      return;
    }

    try {
      setLoadingDemand(true);

      // Change this if your Opportunity already has a productId
      const productId =
        opportunity.recommendedProducts?.[0];

      if (!productId) {
        alert("No recommended product found.");
        return;
      }

      const data = await getDemandPrediction(productId);

      setDemandPrediction(data.prediction || data.demand);
      setShowDemand(true);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch demand prediction.");
    } finally {
      setLoadingDemand(false);
    }
  }

  return (
    <Card
      className={`mb-5 ${
        isTopPick ? "border-2 border-pink-500 shadow-lg" : ""
      }`}
    >
      {isTopPick && (
        <div className="mb-4 inline-flex items-center rounded-full bg-pink-100 px-3 py-1">
          <span className="mr-2">⭐</span>

          <span className="font-semibold text-pink-600">
            Top Opportunity
          </span>
        </div>
      )}

      <h3 className="text-3xl font-bold">
        {opportunity.title}
      </h3>

      <p className="mt-2 text-gray-500">
        {opportunity.category}
      </p>

      <p className="mt-4 text-gray-600 leading-7">
        {opportunity.reasoning}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">
            Confidence
          </p>

          <p className="font-semibold">
            {opportunity.confidence}%
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Demand
          </p>

          <p className="font-semibold">
            {opportunity.expectedDemand}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Revenue
          </p>

          <p className="font-semibold">
            ₹{opportunity.expectedRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700">
          Start Live
        </button>

        <button
          onClick={handleExplain}
          disabled={loadingAI}
          className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loadingAI ? "Loading..." : "✨ Why?"}
        </button>

        <button
          onClick={handleDemandPrediction}
          disabled={loadingDemand}
          className="rounded-xl border border-blue-300 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loadingDemand ? "Loading..." : "📈 Demand Forecast"}
        </button>
      </div>

      {showAI && (
        <div className="mt-6 rounded-xl border border-pink-200 bg-pink-50 p-4">
          <h4 className="font-semibold text-pink-700">
            ✨ AI Explanation
          </h4>

          <p className="mt-2 whitespace-pre-line leading-7 text-gray-700">
            {aiExplanation}
          </p>
        </div>
      )}

      {showDemand && demandPrediction && (
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <h4 className="font-semibold text-blue-700">
            📈 AI Demand Forecast
          </h4>

          <pre className="mt-2 whitespace-pre-wrap font-sans leading-7 text-gray-700">
            {typeof demandPrediction === "string"
              ? demandPrediction
              : JSON.stringify(demandPrediction, null, 2)}
          </pre>
        </div>
      )}
    </Card>
  );
}

export default OpportunityCard;