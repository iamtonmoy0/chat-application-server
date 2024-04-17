const { default: mongoose, Schema, model, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {},
});

const User = model("User", userSchema);

module.exports = User;
