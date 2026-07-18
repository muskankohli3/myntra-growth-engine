const express = require("express");

const router = express.Router();

const {
  explainOpportunity,
  predictDemand,
  reviveProduct,
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

module.exports = router;