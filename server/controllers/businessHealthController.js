const BusinessHealth = require("../models/BusinessHealth");

const getBusinessHealth = async (req, res) => {
  try {
    const data = await BusinessHealth.findOne();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch business health",
    });
  }
};

module.exports = {
  getBusinessHealth,
};