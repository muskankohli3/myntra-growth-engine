import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import live1 from "../../assets/images/live/live1.jpg";
import live2 from "../../assets/images/live/live2.jpg";

import { getLiveSessions } from "../../services/customerApi";

const liveImages = [live1, live2];

function LiveShoppingSection() {
  const navigate = useNavigate();

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSessions() {
      try {
        const data = await getLiveSessions();
        console.log("Live Sessions:", data);
        setSessions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadSessions();
  }, []);

  if (loading) {
    return (
      <div className="px-6 py-6">
        <p>Loading live sessions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">
          🔴 Live Shopping
        </h2>

        <button
          onClick={() => navigate("/customer/discovery")}
          className="text-pink-600 font-semibold"
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {sessions.map((session, index) => (
          <div
            key={session._id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <img
              src={liveImages[index % liveImages.length]}
              alt={session.title}
              className="w-full aspect-video object-contain rounded-lg bg-gray-100 mb-4"
            />

            <h3 className="font-semibold">
              {session.title}
            </h3>

            <p className="text-gray-500">
              {session.sellerId?.storeName || "Seller"}
            </p>

            <p className="text-sm text-red-500 mt-2">
              {session.status.toUpperCase()}
            </p>

            <p className="text-sm text-gray-500">
              👀 {session.viewerCount} watching
            </p>

            <button
              onClick={() =>
                navigate("/customer/live", {
                  state: session,
                })
              }
              className="mt-4 w-full rounded-lg bg-pink-500 py-2 text-white"
            >
              Join Live
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveShoppingSection;