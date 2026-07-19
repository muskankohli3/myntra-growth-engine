import Card from "./ui/Card";

import socket from "../services/socket";
import { startLiveSession } from "../services/liveSessionService";

function LivePreview({ liveSession }) {
  async function handleStartLive() {
    if (!liveSession) return;

    try {
      await startLiveSession(liveSession._id);

      socket.emit("start-live", liveSession._id);

      console.log("Live started");
    } catch (error) {
      console.error(error);
    }
  }

  function handleEndLive() {
    if (!liveSession) return;

    socket.emit("end-live", liveSession._id);

    console.log("Live ended");
  }

  return (
    <Card>
      <div className="flex h-96 flex-col items-center justify-center rounded-xl bg-gray-100 gap-6">
        <p className="text-xl text-gray-500">
          🎥 Camera Preview
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleStartLive}
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Start Live
          </button>

          <button
            onClick={handleEndLive}
            className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            End Live
          </button>
        </div>
      </div>
    </Card>
  );
}

export default LivePreview;