const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io server
const io = new Server(server, {
  cors: {
    origin: "*", // tighten this later if needed
    methods: ["GET", "POST"],
  },
});

const initializeSocket = require("./socket/socketHandler");

initializeSocket(io);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});