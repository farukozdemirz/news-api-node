const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

/**
 * Hide properties of Mongoose News object.
 */
newsSchema.methods.toJSON = function() {
  const news = this;
  const newsObject = news.toObject();
  delete newsObject.__v;
  delete newsObject.updated_at;

  return newsObject;
};

const News = mongoose.model('News', newsSchema);

module.exports = News;
