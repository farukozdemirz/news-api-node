const router = require('express').Router();

router.use('/api/user', require('./api/user'));
router.use('/api/category', require('./api/category'));
router.use('/api/comment', require('./api/comment'));
router.use('/api/news', require('./api/news'));
router.use('/api/tag', require('./api/tag'));
router.use('/api/auth', require('./api/auth'));

module.exports = router;
