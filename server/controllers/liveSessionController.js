const LiveSession = require("../models/LiveSession");

const getAllLiveSessions = async (req, res) => {
  try {
    const sessions = await LiveSession.find();

    res.status(200).json(sessions);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch live sessions",
    });
  }
};

module.exports = {
  getAllLiveSessions,
};