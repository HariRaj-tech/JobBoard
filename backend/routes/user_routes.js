const express = require('express');
const controller = require('../controllers/user_controller');
const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);

exports.router = router;
