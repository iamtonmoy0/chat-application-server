const { RegisterUserController } = require("../controllers/user.controller");

const router = require("express").Router();

router.route("/user/register").post(RegisterUserController);
module.exports = router;
