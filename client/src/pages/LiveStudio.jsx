import SellerLayout from "../layouts/SellerLayout";
import LivePreview from "../components/LivePreview";
import AISuggestions from "../components/AISuggestions";
import LiveComments from "../components/LiveComments";
import LiveMetrics from "../components/LiveMetrics";

function LiveStudio() {
  return (
    <SellerLayout>
      <h1 className="mb-2 text-4xl font-bold">
        🎥 AI Live Studio
      </h1>

      <p className="mb-8 text-gray-500">
        AI assists sellers during live commerce sessions.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LivePreview />
        </div>

        <AISuggestions />
      </div>

      <LiveComments />

      <LiveMetrics />
    </SellerLayout>
  );
}

export default LiveStudio;