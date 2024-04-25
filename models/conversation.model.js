const {  Schema, model, Types } = require("mongoose");

const conversationSchema = new Schema({
  participants: [{ type: Types.ObjectId, ref: "User" }],
  messages: [{ type: Types.ObjectId, ref: "Message" }],
});

const Conversation = model("Conversation", conversationSchema);
module.exports = Conversation;
