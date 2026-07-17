const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },

  totalRevenue: {
    type: Number,
    required: true,
  },

  totalOrders: {
    type: Number,
    required: true,
  },

  totalLiveSessions: {
    type: Number,
    required: true,
  },

  totalViewers: {
    type: Number,
    required: true,
  },

  conversionRate: {
    type: Number,
    required: true,
  },

  topProducts: [
    {
      name: String,
      revenue: Number,
    },
  ],

  liveHistory: [
    {
      title: String,
      revenue: Number,
      viewers: Number,
      date: String,
    },
  ],
});

module.exports = mongoose.model(
  "Analytics",
  analyticsSchema
);