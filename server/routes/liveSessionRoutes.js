const express = require("express");

const {
  getLiveSessions,
  getLiveSessionById,
  createLiveSession,
  startLiveSession,
  pinProduct,
} = require("../controllers/liveSessionController");

const router = express.Router();

router.get("/", getLiveSessions);
router.get("/:id", getLiveSessionById);

router.post("/", createLiveSession);

router.patch("/:id/start", startLiveSession);
router.patch("/:id/pin", pinProduct);

module.exports = router;