const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    images: [
      {
        type: String,
      },
    ],

    sizes: [
      {
        type: String,
      },
    ],

    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);