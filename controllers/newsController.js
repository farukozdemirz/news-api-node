const News = require('../models/News');

const createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json({ news });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await News.find({});
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewsByCategory = async (req, res) => {
  try {
    const news = await News.find({ category: req.params.category });
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewsByTag = async (req, res) => {
  try {
    const news = await News.find({ tags: req.params.tag });
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewsByAuthor = async (req, res) => {
  try {
    const news = await News.find({ author: req.params.authorId });
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ error: 'News not found' });
    }
    res.json({ news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNewsById = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!news) {
      res.status(404).json({ error: 'News not found' });
    }
    res.json({ news });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNewsById = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      res.status(404).json({ error: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNewsById,
  deleteNewsById,
  getNewsByCategory,
  getNewsByTag,
  getNewsByAuthor,
};
