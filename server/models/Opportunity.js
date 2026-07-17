const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  confidence: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  priority: {
    type: String,
    enum: ["HIGH", "MEDIUM", "LOW"],
    required: true,
  },

  expectedDemand: {
    type: String,
    required: true,
  },

  expectedRevenue: {
    type: Number,
    required: true,
  },

  reasoning: {
    type: String,
    required: true,
  },

  recommendedProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  generatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Opportunity", opportunitySchema);