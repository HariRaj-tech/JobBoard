const express = require("express");
const controller = require("./controller/user_controller");

const router = express.Router();

// router.get("/", controller.get_users);
// router.get("/:userId", controller.get_user);
// router.post("/", controller.create_user);
// router.put("/:userId", controller.update_user);
// router.delete("/:userId", controller.delete_user);

router
  .post("/signup", signUpUser)
  .post("/login", loginUser)
  .get("/check", checkAuth);

exports.router = router;
