const Comment = require("../models/Comment");

// Create Comment
const createComment = async (req, res) => {
  try {
    const {
      liveSessionId,
      author,
      message,
      isQuestion,
    } = req.body;

    const comment = await Comment.create({
      liveSessionId,
      author,
      message,
      isQuestion,
    });

    res.status(201).json({
      success: true,
      message: "Comment added successfully.",
      comment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add comment.",
      error: error.message,
    });
  }
};

// Get Comments By Live Session
const getCommentsBySession = async (req, res) => {
  try {
    const comments = await Comment.find({
      liveSessionId: req.params.id,
    }).sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: comments.length,
      comments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch comments.",
      error: error.message,
    });
  }
};

// Delete Comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found.",
      });
    }

    await comment.deleteOne();

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete comment.",
      error: error.message,
    });
  }
};

module.exports = {
  createComment,
  getCommentsBySession,
  deleteComment,
};