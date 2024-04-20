const {
  RegisterUserController,
  LoginUserController,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.route("/user/register").post(RegisterUserController);
router.route("/user/login").post(LoginUserController);
module.exports = router;
