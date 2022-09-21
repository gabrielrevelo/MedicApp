var express = require('express');
var router = express.Router();
const routesUser = require('./users')
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');
const routesDoctor = require('./doctor')
const routesPatient = require('./patient');
const routesAdmin = require('./admin');
const routesAuth = require('./auth');
const routesProfile = require('./profile');
const routesAppoinment = require('./appointment');
const routesFavoritos = require('./favorite')
const routesStripe = require('./stripe');

/* GET home page. */
router.use('/users',routesUser );

/* GET dummy routes. */
router.use('/dummy',dummyRoutes );

/* Profiles routes */
router.use('/profile', routesProfile);

/* Doctor routes */
router.use('/auth', routesAuth);

/* Doctor routes */
router.use('/doctors', routesDoctor);

/* Patient routes */
router.use('/patients', routesPatient);

/* Patient routes */
router.use('/favorites', routesFavoritos);

/* Admin routes */
router.use('/admins', routesAdmin);

/* Appointment routes */
router.use('/appointments', routesAppoinment);

router.use('/stripe', routesStripe);

module.exports = router;
