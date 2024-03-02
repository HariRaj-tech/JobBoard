const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router
    .post('/', controller.post)
    .get('/:jobId', controller.getById)
    .get('/getJobs', controller.getJobs);

module.exports = router;
