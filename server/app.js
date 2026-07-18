const express = require("express");
const cors = require("cors");

const opportunityRoutes = require("./routes/opportunityRoutes");
const businessHealthRoutes = require("./routes/businessHealthRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// NEW
const orderRoutes = require("./routes/orderRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    message: "Seller Backend Running 🚀",
  });
});

// Existing Seller APIs
app.use("/api/opportunities", opportunityRoutes);

app.use("/api/business-health", businessHealthRoutes);

app.use("/api/analytics", analyticsRoutes);

// NEW Customer APIs
app.use("/api/orders", orderRoutes);

app.use("/api/comments", commentRoutes);

module.exports = app;