const { responseError, responseSuccess } = require("response-manager");
const Message = require("../models/message.model");

exports.getMessagesByConversationIdService = async (res, query) => {
  const { limit, conversationId } = query;
  console.log(conversationId);
  const result = await Message.find({ conversationId });

  console.log(result);
  if (result.length <= 0) {
    return responseError(res, 400, "failed", "no messages available");
  }
  return responseSuccess(res, 200, "success", result);
};
