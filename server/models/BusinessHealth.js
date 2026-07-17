const mongoose = require("mongoose");

const businessHealthSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },

  orders: {
    type: Number,
    required: true,
  },

  revenue: {
    type: Number,
    required: true,
  },

  returns: {
    type: Number,
    required: true,
  },

  pendingPayments: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "BusinessHealth",
  businessHealthSchema
);