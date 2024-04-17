const { RegisterUserController } = require("../controllers/user.controller");

const router = require("express").Router();

router.route("/user/register", RegisterUserController);
module.exports = router;
