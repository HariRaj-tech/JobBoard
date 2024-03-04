const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router
    .post('/postJob', controller.post)
    .get('/', controller.getById)
    .get('/getJobs', controller.getJobs);

module.exports = router;
