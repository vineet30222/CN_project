const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log("Router loaded");

router.get('/',homeController.home);

//sir has created it, ok
router.use('/users',require('./user'));

module.exports = router;