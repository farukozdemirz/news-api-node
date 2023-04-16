const express = require('express');

const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require('../../controllers/categoryController');

router.post('/category', createCategory);

router.get('/category', getAllCategories);

router.get('/category/:id', getCategoryById);

router.put('/category/:id', updateCategoryById);

router.delete('/category/:id', deleteCategoryById);

module.exports = router;
