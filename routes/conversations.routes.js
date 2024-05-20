const {
  getConversationsController,
  getSingleConversationController
} = require("../controllers/conversations.controller");

const router = require("express").Router();

router.route("/conversations").get(getConversationsController);
router.route("/conversation").get(getSingleConversationController);

module.exports = router;
