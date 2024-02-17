const express = require("express");
const controller = require("../controllers/user_controller");
const router = express.Router();

router.post("/signup", controller.signup)
router.post("/login", controller.login)
router.get("/check", controller.auth);

exports.router = router;
