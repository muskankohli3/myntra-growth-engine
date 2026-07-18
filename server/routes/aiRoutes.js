const express = require("express");

const router = express.Router();

const {
  explainOpportunity,
  predictDemand,
  reviveProduct,
  analyticsInsights,
} = require("../controllers/aiController");

router.get(
  "/opportunities/:id/explain",
  explainOpportunity
);

router.get(
  "/products/:id/demand",
  predictDemand
);

router.get(
  "/products/:id/revive",
  reviveProduct
);

router.get(
  "/analytics/insights",
  analyticsInsights
);

module.exports = router;