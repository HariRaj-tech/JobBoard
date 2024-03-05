const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/', controller.get);
router.post('/resume', upload.single('resume'), controller.postResume);
router.get('/resume', controller.getResume);

module.exports = router;
