const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router.post('/postJob', controller.post)
router.get('/', controller.getJobs);
router.get('/:userId/:jobId', controller.get)
router.post('/apply/:userId/:jobId', controller.apply);
router.get('/applications', controller.getApplications);
router.get('/search', controller.searchJob);

module.exports = router;
