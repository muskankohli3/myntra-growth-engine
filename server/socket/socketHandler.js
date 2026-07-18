function initializeSocket(io) {
  io.on("connection", (socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);

    // Join a live session room
    socket.on("join-live-session", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      socket.join(room);

      console.log(
        `📺 ${socket.id} joined room ${room}`
      );
    });

    // Leave a live session room
    socket.on("leave-live-session", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      socket.leave(room);

      console.log(
        `👋 ${socket.id} left room ${room}`
      );
    });

    socket.on("disconnect", () => {
      console.log(`🔴 Socket disconnected: ${socket.id}`);
    });
  });
}

module.exports = initializeSocket;