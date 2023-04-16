const router = require('express').Router();

router.use('/api/user', require('./api/user'));

module.exports = router;
