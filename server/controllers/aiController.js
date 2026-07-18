const Opportunity = require("../models/Opportunity");
const {
  generateOpportunityReason,
} = require("../services/gemini/opportunityAI");

async function explainOpportunity(req, res) {
  try {
    const opportunity = await Opportunity.findById(req.params.id);

    if (!opportunity) {
      return res.status(404).json({
        success: false,
        message: "Opportunity not found",
      });
    }

    const explanation = await generateOpportunityReason(opportunity);

    res.json({
      success: true,
      explanation,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  explainOpportunity,
};