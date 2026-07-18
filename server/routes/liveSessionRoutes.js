import express from "express";

import {
  getLiveSessions,
  getLiveSessionById,
  createLiveSession,
  startLiveSession,
  pinProduct,
} from "../controllers/liveSessionController.js";

const router = express.Router();

router.get("/", getLiveSessions);

router.get("/:id", getLiveSessionById);

router.post("/", createLiveSession);

router.patch("/:id/start", startLiveSession);

router.patch("/:id/pin", pinProduct);

export default router;