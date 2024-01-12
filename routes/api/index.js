const router = require('express').Router();
const bands = require('./bandRoutes');
const users = require('./userRoutes');
const posts = require('./postRoutes');

router.use('/users', users);
router.use('/bands', bands);
router.use('/posts', posts);



module.exports = router;