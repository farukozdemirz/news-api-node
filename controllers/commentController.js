const Comment = require('../models/Comment');

const createComment = async (req, res) => {
  try {
    const comment = new Comment({
      ...req.body,
      user: req.user._id,
    });
    await comment.save();
    res.json({ comment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json({ comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentsByNewsId = async (req, res) => {
  const { newsId } = req.params;
  try {
    const comments = await Comment.find({ news: newsId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) {
      res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ comment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(404).json({ error: 'Comment not found' });
    }
    if (comment.user.toString() !== req.user._id.toString()) {
      res.status(401).json({ error: 'Unauthorized' });
    }
    await comment.remove();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById,
  getCommentsByNewsId,
};
