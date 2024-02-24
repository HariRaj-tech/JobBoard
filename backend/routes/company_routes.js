const express = require('express');
const controller = require('../controllers/company_controller');
const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/auth', controller.auth);

exports.router = router;
