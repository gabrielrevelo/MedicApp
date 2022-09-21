const express = require('express');
const router = express.Router();
const controllerFavorites = require('../controllers/controller.favorites')
const {Patient} = require ('../middlewares/Authorization')

router.get('/all', controllerFavorites.all )
router.post('/add',[Patient], controllerFavorites.add )
router.get('/likes',[Patient], controllerFavorites.favorites )
router.get('/likes/:id',[Patient], controllerFavorites.likeId )






module.exports = router;