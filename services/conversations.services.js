const Conversation = require("../models/conversation.model");

exports.getConversationsServices = async (res, query) => {
  //   const result = await Conversation.find({ participants: { $in: query } });
  const result = await Conversation.find({})
    .where("participants")
    .in(query)
    .populate("users", "name email");
  console.log(result);
  if (!result || !result.length)
    return res.status(404).json("No conversations found");
  else return res.status(200).json(result);
};
// get single conversation
exports.getSingleConversationServices = async (res, query) => {
  const { userEmail, participantEmail } = query;

  const result = await Conversation.find({})
    .where("participants")
    .in([userEmail, participantEmail])
    .populate("users", "name email");

  if (!result || !result.length)
    return res.status(404).json("No conversations found");
  else return res.status(200).json(result);
};
