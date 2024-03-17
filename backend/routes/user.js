const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/signup', upload.any(), controller.signup);
router.post('/login', controller.login);
router.get('/:id', controller.get);
router.post('/:id', upload.any(), controller.updateProfile);
router.post('/image/:id', upload.single('image'), controller.postImage);
router.get('/image/:id', controller.getImage);
router.post('/resume/:id', upload.single('resume'), controller.postResume);
router.get('/resume/:id', controller.getResume);

module.exports = router;
