const Tag = require('../models/Tag');

const createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.json({ tag });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json({ tags });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) {
      res.status(404).json({ error: 'Tag not found' });
    }
    res.json({ tag });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTagById = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tag) {
      res.status(404).json({ error: 'Tag not found' });
    }
    res.json({ tag });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTagById = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) {
      res.status(404).json({ error: 'Tag not found' });
    }
    res.json({ message: 'Tag deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTagById,
  deleteTagById,
};
