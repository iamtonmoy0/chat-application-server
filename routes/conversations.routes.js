const {
  getConversationsController,
} = require("../controllers/conversations.controller");

const router = require("express").Router();

router.route("/conversations").get(getConversationsController);

module.exports = router;
