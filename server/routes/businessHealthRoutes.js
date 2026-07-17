const express = require("express");
const router = express.Router();

const {
  getBusinessHealth,
} = require("../controllers/businessHealthController");

router.get("/", getBusinessHealth);

module.exports = router;