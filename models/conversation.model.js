const { Schema, model, Types } = require("mongoose");

const conversationSchema = new Schema(
  {
    participants: [{ type: String }],
    users: [{ type: Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Conversation = model("Conversation", conversationSchema);
module.exports = Conversation;
