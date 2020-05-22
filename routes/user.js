const express = require('express');
const router =express.Router();

const userController = require('../controllers/users_controller');
const vineetController = require('../controllers/vineet_controller');
const photoController = require('../controllers/photos_controller');
const app=express();

router.get('/profile',userController.profile);

router.get('/photos',photoController.photos);
router.get('/',vineetController.um);



module.exports =router;