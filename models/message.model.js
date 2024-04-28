const { Types, Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    conversationId: {
      type: Types.ObjectId,
      ref: "Conversation",
      index: true,
    },
    sender: { type: Types.ObjectId, ref: "User" },
    receiver: { type: Types.ObjectId, ref: "User" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);
module.exports = Message;
