const express = require("express");
const cors = require("cors");

const app = express();

// Existing Seller Routes
const opportunityRoutes = require("./routes/opportunityRoutes");
const businessHealthRoutes = require("./routes/businessHealthRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

// Seller Backend
const productRoutes = require("./routes/productRoutes");
const liveSessionRoutes = require("./routes/liveSessionRoutes");

// Customer Backend
const orderRoutes = require("./routes/orderRoutes");
const commentRoutes = require("./routes/commentRoutes");

// AI
// const aiRoutes = require("./routes/aiRoutes");

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

// Seller APIs
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/business-health", businessHealthRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api/products", productRoutes);
app.use("/api/live-sessions", liveSessionRoutes);

// Customer APIs
app.use("/api/orders", orderRoutes);
app.use("/api/comments", commentRoutes);

// AI APIs
// app.use("/api/ai", aiRoutes);

module.exports = app;