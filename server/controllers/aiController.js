const Opportunity = require("../models/Opportunity");
const {
  generateOpportunityReason,
} = require("../services/gemini/opportunityAI");

const Product = require("../models/Product");

const {
  generateDemandPrediction,
} = require("../services/gemini/demandAI");

const {
  generateReviveSuggestion,
} = require("../services/gemini/reviveAI");

const Analytics = require("../models/Analytics");

const {
  generateAnalyticsInsights,
} = require("../services/gemini/analyticsAI");

const explainOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);

    if (!opportunity) {
      return res.status(404).json({
        success: false,
        message: "Opportunity not found",
      });
    }

    const explanation =
      await generateOpportunityReason(opportunity);

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
};

const predictDemand = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const prediction =
      await generateDemandPrediction(product);

    res.json({
      success: true,
      prediction,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const reviveProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const revive =
      await generateReviveSuggestion(product);

    res.json({
      success: true,
      revive,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const analyticsInsights = async (req, res) => {
  try {
    const analytics = await Analytics.findOne();

    if (!analytics) {
      return res.status(404).json({
        success: false,
        message: "Analytics not found",
      });
    }

    const insights =
      await generateAnalyticsInsights(analytics);

    res.json({
      success: true,
      insights,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  explainOpportunity,
  predictDemand,
  reviveProduct,
  analyticsInsights,
};