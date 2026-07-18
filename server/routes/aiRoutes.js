const express = require("express");

const router = express.Router();

const {
  explainOpportunity,
  predictDemand,
} = require("../controllers/aiController");

router.get(
  "/opportunities/:id/explain",
  explainOpportunity
);

router.get(
  "/products/:id/demand",
  predictDemand
);

module.exports = router;