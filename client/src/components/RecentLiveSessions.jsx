import Card from "./ui/Card";
import { getMockRecentLiveSession } from "../services/sellerService";

function RecentLiveSessions() {
  const session = getMockRecentLiveSession();

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Live Sessions
      </h2>

      <Card>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">
              Product
            </p>

            <p className="font-semibold">
              {session.product}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Revenue
            </p>

            <p className="font-semibold text-green-600">
              {session.revenue}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Viewers
            </p>

            <p className="font-semibold">
              {session.viewers}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Duration
            </p>

            <p className="font-semibold">
              {session.duration}
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default RecentLiveSessions;