import Card from "./ui/Card";

function AISuggestionCard({ suggestion }) {
  const priorityColor = {
    HIGH: "bg-red-100 text-red-600",
    MEDIUM: "bg-yellow-100 text-yellow-600",
    LOW: "bg-green-100 text-green-600",
  };

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

        <span>
          {suggestion.category}
        </span>
      </div>

      <button className="mt-6 rounded-xl bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
        {suggestion.action}
      </button>
    </Card>
  );
}

export default AISuggestionCard;