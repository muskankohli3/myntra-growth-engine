const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  storeName: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    default: "",
  },

  rating: {
    type: Number,
    default: 0,
  },

  followers: {
    type: Number,
    default: 0,
  },

  languages: [
    {
      type: String,
    },
  ],

  liveSessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LiveSession",
    },
  ],

  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Seller", sellerSchema);