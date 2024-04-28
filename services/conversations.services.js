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
