import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    liveSessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LiveSession",
      required: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    isQuestion: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commentSchema);