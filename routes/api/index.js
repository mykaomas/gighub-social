const router = require('express').Router();
const bands = require('./bandRoutes');
const users = require('./bandUsers');


router.use('/bands', bands);
router.use('./users', users)

module.exports = router;