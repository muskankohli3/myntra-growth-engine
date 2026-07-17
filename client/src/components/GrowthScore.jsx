import Card from "./ui/Card";
import { getGrowthScore } from "../services/sellerService";

function GrowthScore() {
  const data = getGrowthScore();

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Growth Score
      </h2>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold text-pink-600">
              {data.score}
            </p>

            <p className="text-gray-500">
              out of 100
            </p>
          </div>

          <div>
            <ul className="space-y-2 text-gray-600">
              {data.recommendations.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default GrowthScore;