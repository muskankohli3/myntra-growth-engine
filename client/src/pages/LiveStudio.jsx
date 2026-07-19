import { useEffect, useState } from "react";

import SellerLayout from "../layouts/SellerLayout";
import LivePreview from "../components/LivePreview";
import AISuggestions from "../components/AISuggestions";
import LiveComments from "../components/LiveComments";
import LiveMetrics from "../components/LiveMetrics";

import { getLiveSessions } from "../services/liveSessionService";

function LiveStudio() {
  const [liveSession, setLiveSession] = useState(null);

  useEffect(() => {
    async function loadLiveSession() {
      try {
        const sessions = await getLiveSessions();

        if (sessions.length > 0) {
          setLiveSession(sessions[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadLiveSession();
  }, []);

  return (
    <SellerLayout>
      <h1 className="mb-2 text-4xl font-bold">
        🎥 AI Live Studio
      </h1>

      <p className="mb-8 text-gray-500">
        AI assists sellers during live commerce sessions.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LivePreview liveSession={liveSession} />
        </div>

        <AISuggestions />
      </div>

      <LiveComments />

      <LiveMetrics />
    </SellerLayout>
  );
}

export default LiveStudio;