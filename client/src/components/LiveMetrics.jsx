import Card from "./ui/Card";

function LiveMetrics() {
  const metrics = [
    { title: "Viewers", value: 218 },
    { title: "Orders", value: 16 },
    { title: "Likes", value: 94 },
    { title: "Watch Time", value: "12m" },
    { title: "Conversion", value: "7.3%" },
    { title: "Revenue", value: "₹18.4K" },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Live Performance
      </h2>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <p className="text-gray-500">
              {metric.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {metric.value}
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default LiveMetrics;