const { default: mongoose, Schema, model } = require("mongoose");

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
  password: {
    type: String,
    required: true,
    set: function (v) {
      if (this.isNew || this.isModified("password")) {
        return bcrypt.hashSync(v, bcrypt.genSaltSync(10));
      }
      return v;
    },
  },
});

const User = model("User", userSchema);

module.exports = User;
