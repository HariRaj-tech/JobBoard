const express = require('express');
const router = express.Router();
const controller = require('../controllers/job');

router.post('/', controller.createJob)
router.get('/', controller.getJobs);
router.get('/:id', controller.getJob)
router.post('/:id/applications', controller.createApplication);
router.get('/:id/applications', controller.getApplications);
router.get('/search', controller.searchJob);

module.exports = router;
