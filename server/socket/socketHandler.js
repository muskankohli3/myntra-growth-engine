function initializeSocket(io) {
  io.on("connection", (socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);

    // Join room
    socket.on("join-live-session", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      socket.join(room);

      console.log(
        `📺 ${socket.id} joined room ${room}`
      );
    });

    // Leave room
    socket.on("leave-live-session", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      socket.leave(room);

      console.log(
        `👋 ${socket.id} left room ${room}`
      );
    });

    // Seller started live
    socket.on("start-live", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      console.log(
        `🟢 Live started for ${room}`
      );

      io.to(room).emit("live-started", {
        liveSessionId,
      });
    });

    // Seller ended live
    socket.on("end-live", (liveSessionId) => {
      const room = `live:${liveSessionId}`;

      console.log(
        `🔴 Live ended for ${room}`
      );

      io.to(room).emit("live-ended", {
        liveSessionId,
      });
    });

    socket.on("disconnect", () => {
      console.log(
        `🔴 Socket disconnected: ${socket.id}`
      );
    });
  });
}

module.exports = initializeSocket;