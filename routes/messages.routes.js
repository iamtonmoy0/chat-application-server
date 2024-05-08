const {
  getMessagesByConversationIdController,
  createMessagesController,
} = require("../controllers/messages.controller");

const router = require("express").Router();

router
  .route("/messages")
  .get(getMessagesByConversationIdController)
  .post(createMessagesController);

module.exports = router;
