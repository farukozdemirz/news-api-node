const express = require('express');

const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require('../../controllers/categoryController');

router.post('/create', createCategory);

router.get('/getAll', getAllCategories);

router.get('/get/:id', getCategoryById);

router.put('/update/:id', updateCategoryById);

router.delete('/delete/:id', deleteCategoryById);

module.exports = router;
