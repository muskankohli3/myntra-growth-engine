const express = require("express");

const router = express.Router();

const {
  explainOpportunity,
} = require("../controllers/aiController");

router.get(
  "/opportunities/:id/explain",
  explainOpportunity
);

module.exports = router;