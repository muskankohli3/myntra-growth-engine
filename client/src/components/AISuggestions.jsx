import { getAISuggestions } from "../services/sellerService";
import AISuggestionCard from "./AISuggestionCard";

function AISuggestions() {
  const suggestions = getAISuggestions();

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        AI Live Assistant
      </h2>

      {suggestions.map((suggestion) => (
        <AISuggestionCard
          key={suggestion.id}
          suggestion={suggestion}
        />
      ))}
    </section>
  );
}

export default AISuggestions;