const express = require("express");

const {
  createComment,
  getCommentsBySession,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", createComment);

router.get("/live-session/:id", getCommentsBySession);

router.delete("/:id", deleteComment);

module.exports = router;