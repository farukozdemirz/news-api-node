const express = require('express');

const router = express.Router();
const NewsController = require('../../controllers/newsController');

router.post('/news', NewsController.createNews);

router.get('/news', NewsController.getAllNews);

router.get('/news/category/:category', NewsController.getNewsByCategory);

router.get('/news/tag/:tag', NewsController.getNewsByTag);

router.get('/news/author/:authorId', NewsController.getNewsByAuthor);

router.get('/news/:id', NewsController.getNewsById);

router.put('/news/:id', NewsController.updateNewsById);

router.delete('/news/:id', NewsController.deleteNewsById);

module.exports = router;
