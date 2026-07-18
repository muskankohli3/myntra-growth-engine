const LiveSession = require("../models/LiveSession");

// GET /api/live-sessions
const getLiveSessions = async (req, res) => {
  try {
    const sessions = await LiveSession.find()
      .populate("sellerId")
      .populate("pinnedProductId");

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /api/live-sessions/:id
const getLiveSessionById = async (req, res) => {
  try {
    const session = await LiveSession.findById(req.params.id)
      .populate("sellerId")
      .populate("pinnedProductId");

    if (!session) {
      return res.status(404).json({
        message: "Live session not found",
      });
    }

    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST /api/live-sessions
const createLiveSession = async (req, res) => {
  try {
    const session = await LiveSession.create(req.body);

    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// PATCH /api/live-sessions/:id/start
const startLiveSession = async (req, res) => {
  try {
    const session = await LiveSession.findByIdAndUpdate(
      req.params.id,
      {
        status: "live",
        startedAt: new Date(),
      },
      {
        new: true,
      }
    );

    if (!session) {
      return res.status(404).json({
        message: "Live session not found",
      });
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PATCH /api/live-sessions/:id/pin
const pinProduct = async (req, res) => {
  try {
    const session = await LiveSession.findByIdAndUpdate(
      req.params.id,
      {
        pinnedProductId: req.body.productId,
      },
      {
        new: true,
      }
    );

    if (!session) {
      return res.status(404).json({
        message: "Live session not found",
      });
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getLiveSessions,
  getLiveSessionById,
  createLiveSession,
  startLiveSession,
  pinProduct,
};