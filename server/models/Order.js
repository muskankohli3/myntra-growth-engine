import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    liveSessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LiveSession",
      default: null,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["placed"],
      default: "placed",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);