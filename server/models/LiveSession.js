import mongoose from "mongoose";

const liveSessionSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["scheduled", "live", "ended"],
      default: "scheduled",
    },

    startedAt: {
      type: Date,
      default: null,
    },

    endedAt: {
      type: Date,
      default: null,
    },

    pinnedProductId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },

    viewerCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("LiveSession", liveSessionSchema);