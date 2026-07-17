const express = require("express");
const router = express.Router();

const {
  getAllLiveSessions,
} = require("../controllers/liveSessionController");

router.get("/", getAllLiveSessions);

module.exports = router;