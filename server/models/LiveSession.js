const mongoose = require("mongoose");

const liveSessionSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },

  sellerName: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    default: "",
  },

  status: {
    type: String,
    enum: ["SCHEDULED", "LIVE", "ENDED"],
    default: "LIVE",
  },

  category: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    default: "English",
  },

  videoUrl: {
    type: String,
    required: true,
  },

  startTime: {
    type: Date,
    default: Date.now,
  },

  endTime: {
    type: Date,
    default: null,
  },

  viewerCount: {
    type: Number,
    default: 0,
  },

  likeCount: {
    type: Number,
    default: 0,
  },

  pinnedProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  tags: [String],
});

module.exports = mongoose.model("LiveSession", liveSessionSchema);