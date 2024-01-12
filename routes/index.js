// this  enables routing in this file.  
const router = require('express').Router();
//this is importing the api folder
const apiRoutes = require('./api');
//http://localhost:3001/api/bands 
//define initial route of api and import the index file from the api folder
router.use('/api', apiRoutes);

// router.use('/view', viewRoutes);

module.exports = router;