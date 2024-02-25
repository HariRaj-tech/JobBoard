const express = require('express');
const router = express.Router();
const controller = require('../controllers/job_controller');

router.post('/', controller.post);
router.get('/:jobId', controller.getById);

module.exports = router;
