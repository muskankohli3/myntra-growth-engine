import { useState } from "react";
import Card from "./ui/Card";
import { getReviveSuggestion } from "../services/sellerService";

function AISuggestionCard({ suggestion }) {
  const [loading, setLoading] = useState(false);
  const [reviveData, setReviveData] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const priorityColor = {
    HIGH: "bg-red-100 text-red-600",
    MEDIUM: "bg-yellow-100 text-yellow-600",
    LOW: "bg-green-100 text-green-600",
  };

  async function handleAISuggestion() {
    // Collapse if already open
    if (showSuggestion) {
      setShowSuggestion(false);
      return;
    }

    // Reuse cached response
    if (reviveData) {
      setShowSuggestion(true);
      return;
    }

    try {
      setLoading(true);

      const data = await getReviveSuggestion(
        suggestion.productId
      );

      setReviveData(data.revive);
      setShowSuggestion(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mb-5">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${priorityColor[suggestion.priority]}`}
      >
        {suggestion.priority}
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {suggestion.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {suggestion.reason}
      </p>

      <div className="mt-5 flex justify-between text-sm">
        <span>
          Confidence: <strong>{suggestion.confidence}%</strong>
        </span>

        <span>{suggestion.category}</span>
      </div>

      <button
        onClick={handleAISuggestion}
        className="mt-6 rounded-xl bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
      >
        {loading ? "Generating..." : suggestion.action}
      </button>

      {showSuggestion && reviveData && (
        <div className="mt-6 rounded-xl border border-pink-200 bg-pink-50 p-4">
          <h4 className="font-semibold text-pink-700">
            ✨ AI Revive Suggestion
          </h4>

          <p className="mt-3 text-gray-700">
            <strong>Problem:</strong> {reviveData.problem}
          </p>

          <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
            {reviveData.suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}

export default AISuggestionCard;