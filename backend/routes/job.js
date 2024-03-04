const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router.post('/postJob', controller.post)
router.get('/', controller.get)
router.get('/getJobs', controller.getJobs);
router.post('/apply', controller.apply);

module.exports = router;
