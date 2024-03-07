const express = require('express');
const controller = require('../controllers/company');
const router = express.Router();

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/:id', controller.get);
router.get('/jobs/:id', controller.getJobs);

module.exports = router;
