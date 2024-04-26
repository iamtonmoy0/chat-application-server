const { responseError } = require("response-manager");
const {
  getConversationsServices,
} = require("../services/conversations.services");

// get conversations
exports.getConversationsController = async (req, res) => {
  try {
    await getConversationsServices(res, req.query.email);
  } catch (error) {
    return responseError(res, 400, "failed", error.massage);
  }
};
