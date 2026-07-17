import { useEffect, useState } from "react";
import { getOpportunities } from "../services/opportunityService";
import OpportunityCard from "./OpportunityCard";

function OpportunityFeed() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOpportunities() {
      try {
        const data = await getOpportunities();
        setOpportunities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadOpportunities();
  }, []);

  if (loading) {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-6">
          AI Opportunity Feed
        </h2>

        <p>Loading opportunities...</p>
      </section>
    );
  }

  const topPick = opportunities.find(
    (item) => item.priority === "HIGH"
  );

  const remaining = opportunities.filter(
    (item) => item._id !== topPick?._id
  );

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back, Muskan 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here are today's AI recommendations for your store.
        </p>
      </div>

      <h2 className="mb-6 text-3xl font-bold">
        AI Opportunity Feed
      </h2>

      {topPick && (
        <OpportunityCard opportunity={topPick} />
      )}

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {remaining.map((opportunity) => (
          <OpportunityCard
            key={opportunity._id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </section>
  );
}

export default OpportunityFeed;