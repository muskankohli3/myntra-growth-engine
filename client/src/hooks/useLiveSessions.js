import { useEffect, useState } from "react";
import { getLiveSessions } from "../api/customerApi";

export function useLiveSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function loadSessions() {
      try {
        const data = await getLiveSessions();
        setSessions(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadSessions();
  }, []);

  return sessions;
}