import { liveSessions } from "../services/customerService";
import { useNavigate } from "react-router-dom";

function LiveDiscovery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Live Shopping
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {liveSessions.map((session) => (
          <div
            key={session.id}
            className="rounded-xl bg-white shadow border p-4"
          >
            <h2 className="text-xl font-semibold">
              {session.title}
            </h2>

            <p>{session.seller}</p>

            <p className="text-red-500 mt-2">
              {session.time}
            </p>

            <button
              onClick={() =>
                navigate("/customer/live", {
                  state: session,
                })
              }
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg"
            >
              Join Live
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveDiscovery;