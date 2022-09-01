var express = require('express');
var router = express.Router();
const routesUser = require('./users')
const routesDoctor = require('./doctor')
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');

/* GET home page. */
router.use('/users',routesUser );

/* Doctor routes */
router.use('/doctors', routesDoctor);

/* GET dummy routes. */
router.use('/dummy',dummyRoutes );

module.exports = router;
