const express = require('express');

const router = express.Router();
const {
  createComment,
  getCommentsByNewsId,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} = require('../../controllers/commentController');

router.post('/comment', createComment);

router.get('/news/:newsId/comments', getCommentsByNewsId);

router.get('/comment/:id', getCommentById);

router.put('/comment/:id', updateCommentById);

router.delete('/comment/:id', deleteCommentById);

module.exports = router;
