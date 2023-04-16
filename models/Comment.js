const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  news_id: { type: mongoose.Schema.Types.ObjectId, ref: 'News', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
