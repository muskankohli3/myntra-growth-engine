const express = require("express");
const cors = require("cors");

const app = express();

// Routes
const opportunityRoutes = require("./routes/opportunityRoutes");
const businessHealthRoutes = require("./routes/businessHealthRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const productRoutes = require("./routes/productRoutes");
const liveSessionRoutes = require("./routes/liveSessionRoutes");

const aiRoutes = require("./routes/aiRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Seller Backend Running 🚀",
  });
});

// API Routes
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/business-health", businessHealthRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api/products", productRoutes);
app.use("/api/live-sessions", liveSessionRoutes);

app.use("/api/ai", aiRoutes);

module.exports = app;