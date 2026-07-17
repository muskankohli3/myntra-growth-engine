const express = require("express");
const cors = require("cors");
const opportunityRoutes = require("./routes/opportunityRoutes");
const app = express();
const businessHealthRoutes = require("./routes/businessHealthRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Seller Backend Running 🚀",
  });
});

// API Routes
app.use("/api/opportunities", opportunityRoutes);

app.use(
  "/api/business-health",
  businessHealthRoutes
);

app.use("/api/analytics", analyticsRoutes);

module.exports = app;