const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router.get('/search', controller.searchJob);

router.post('/', controller.createJob)
router.get('/', controller.getJobs);
router.get('/:id', controller.getJob)
router.post('/:id/applications', controller.createApplication);
router.get('/:id/applications', controller.getApplications);

module.exports = router;
