const router = require('express').Router();
const bands = require('./bandRoutes');
const users = require('./userRoutes');

router.use('/users', users);
router.use('/bands', bands);


module.exports = router;