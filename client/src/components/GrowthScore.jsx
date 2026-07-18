import { useEffect, useState } from "react";
import Card from "./ui/Card";
import { getAnalyticsInsights } from "../services/sellerService";

function GrowthScore() {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await getAnalyticsInsights();
        setInsights(data.insights);
      } catch (err) {
        console.error(err);
        setError("Failed to load AI insights.");
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  if (loading) {
    return (
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">
          AI Growth Insights
        </h2>

        <Card>
          <p className="text-gray-600">Loading AI insights...</p>
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">
          AI Growth Insights
        </h2>

        <Card>
          <p className="text-red-500">{error}</p>
        </Card>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        AI Growth Insights
      </h2>

      <Card>
        <div>
          <h3 className="text-xl font-bold text-pink-600">
            ✨ Summary
          </h3>

          <p className="mt-3 text-gray-700 leading-7">
            {insights.summary}
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-green-600">
              💪 Strengths
            </h3>

            <ul className="mt-3 space-y-2 text-gray-700">
              {insights.strengths.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-pink-600">
              🚀 Recommendations
            </h3>

            <ul className="mt-3 space-y-2 text-gray-700">
              {insights.recommendations.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default GrowthScore;