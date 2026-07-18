import { useEffect, useState } from "react";
import MetricCard from "./MetricCard";
import { getBusinessHealth  } from "../services/businessHealthService";

function BusinessHealth() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBusinessHealth() {
      try {
        const businessHealth = await getBusinessHealth ();
        setData(businessHealth);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBusinessHealth();
  }, []);

  if (loading) {
    return (
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">
          Business Health
        </h2>

        <p>Loading business health...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">
          Business Health
        </h2>

        <p>Failed to load business health.</p>
      </section>
    );
  }

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Business Health
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Orders"
          value={data.orders}
          color="text-pink-600"
        />

        <MetricCard
          title="Revenue"
          value={`₹${data.revenue.toLocaleString()}`}
          color="text-green-600"
        />

        <MetricCard
          title="Returns"
          value={data.returns}
          color="text-orange-500"
        />

        <MetricCard
          title="Pending Payments"
          value={`₹${data.pendingPayments.toLocaleString()}`}
          color="text-blue-600"
        />
      </div>
    </section>
  );
}

export default BusinessHealth;