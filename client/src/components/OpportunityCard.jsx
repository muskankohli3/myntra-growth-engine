import Card from "./ui/Card";

function OpportunityCard({ opportunity }) {
  const isTopPick = opportunity.priority === "HIGH";

  return (
    <Card
      className={`mb-5 ${
        isTopPick
          ? "border-2 border-pink-500 shadow-lg"
          : ""
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

      <div className="mt-8 flex gap-3">
        <button className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700">
          Start Live
        </button>

        <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
          Why?
        </button>
      </div>
    </Card>
  );
}

export default OpportunityCard;