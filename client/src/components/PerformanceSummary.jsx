import { useEffect, useState } from "react";
import Card from "./ui/Card";
import { getAnalytics } from "../services/analyticsService";

function PerformanceSummary() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const data = await getAnalytics();
        setAnalytics(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <section className="mb-10">
        <h2 className="mb-5 text-2xl font-bold">
          Performance Summary
        </h2>

        <p>Loading analytics...</p>
      </section>
    );
  }

  if (!analytics) {
    return (
      <section className="mb-10">
        <h2 className="mb-5 text-2xl font-bold">
          Performance Summary
        </h2>

        <p>Failed to load analytics.</p>
      </section>
    );
  }

  const metrics = [
    {
      title: "Revenue",
      value: `₹${analytics.totalRevenue.toLocaleString()}`,
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: analytics.totalOrders,
      color: "text-pink-600",
    },
    {
      title: "Conversion",
      value: `${analytics.conversionRate}%`,
      color: "text-blue-600",
    },
    {
      title: "Live Sessions",
      value: analytics.totalLiveSessions,
      color: "text-orange-500",
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-bold">
        Performance Summary
      </h2>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <p className="text-gray-500">
              {metric.title}
            </p>

            <h2 className={`mt-2 text-3xl font-bold ${metric.color}`}>
              {metric.value}
            </h2>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default PerformanceSummary;