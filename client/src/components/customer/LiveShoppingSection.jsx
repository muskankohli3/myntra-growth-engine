import live1 from "../../assets/images/live/live1.jpg";
import live2 from "../../assets/images/live/live2.jpg";
import { useNavigate } from "react-router-dom";
import { liveSessions } from "../../services/customerService";

const liveImages = {
  1: live1,
  2: live2,
};

function LiveShoppingSection() {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">
          🔴 Live Shopping
        </h2>

        <button className="text-pink-600 font-semibold">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {liveSessions.map((session) => (
          <div
            key={session.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >
            <img
            src={liveImages[session.id]}
            alt={session.title}
            className="w-full aspect-video object-contain rounded-lg bg-gray-100 mb-4"
            />

            <h3 className="font-semibold">
              {session.title}
            </h3>

            <p className="text-gray-500">
              {session.seller}
            </p>

            <p className="text-sm text-red-500 mt-2">
              {session.time}
            </p>

            <p className="text-sm text-gray-500">
              👀 {session.viewers} watching
            </p>

            <button
              onClick={() => navigate("/customer/live")}
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