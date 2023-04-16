const express = require('express');

const router = express.Router();
const {
  createTag,
  getAllTags,
  getTagById,
  updateTagById,
  deleteTagById,
} = require('../../controllers/tagController');

router.post('/tag', createTag);

router.get('/tag', getAllTags);

router.get('/tag/:id', getTagById);

router.put('/tag/:id', updateTagById);

router.delete('/tag/:id', deleteTagById);

module.exports = router;
