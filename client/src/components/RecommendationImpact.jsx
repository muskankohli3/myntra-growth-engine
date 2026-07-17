import Card from "./ui/Card";

function RecommendationImpact() {
  const recommendations = [
    {
      title: "Go Live Today",
      impact: "+18%",
    },
    {
      title: "Bundle Offer",
      impact: "+14%",
    },
    {
      title: "Improve Images",
      impact: "+9%",
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-bold">
        AI Recommendation Impact
      </h2>

      <Card>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">
                Recommendation
              </th>

              <th className="py-3 text-right">
                Sales Lift
              </th>
            </tr>
          </thead>

          <tbody>
            {recommendations.map((item) => (
              <tr
                key={item.title}
                className="border-b"
              >
                <td className="py-4">
                  {item.title}
                </td>

                <td className="py-4 text-right font-semibold text-green-600">
                  {item.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}

export default RecommendationImpact;