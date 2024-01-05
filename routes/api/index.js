const router = require('express').Router();
const bands = require('./bandRoutes');


router.use('/bands', bands);

module.exports = router;