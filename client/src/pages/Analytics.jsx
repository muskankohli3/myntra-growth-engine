import SellerLayout from "../layouts/SellerLayout";
import PerformanceSummary from "../components/PerformanceSummary";
import RecommendationImpact from "../components/RecommendationImpact";
import ProductPerformance from "../components/ProductPerformance";
import LiveHistory from "../components/LiveHistory";

function Analytics() {
  return (
    <SellerLayout>
      <h1 className="text-4xl font-bold">
        Analytics
      </h1>

      <p className="mt-2 mb-8 text-gray-500">
        Measure how AI recommendations improve seller performance.
      </p>

      <PerformanceSummary />

      <RecommendationImpact />

      <ProductPerformance />

      <LiveHistory />
    </SellerLayout>
  );
}

export default Analytics;