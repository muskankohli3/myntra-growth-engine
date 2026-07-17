const Opportunity = require("../models/Opportunity");

const getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();

    res.status(200).json(opportunities);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch opportunities",
      error: error.message,
    });
  }
};

module.exports = {
  getAllOpportunities,
};