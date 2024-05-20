const {
  RegisterUserController,
  LoginUserController,
  getUserByEmailController,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.route("/user/register").post(RegisterUserController);
router.route("/user/login").post(LoginUserController);
router.route("/users").get(getUserByEmailController);
module.exports = router;
