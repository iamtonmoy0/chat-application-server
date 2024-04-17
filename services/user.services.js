const { responseError } = require("response-manager");
const http = require("response-status-code");
const User = require("../models/user.model");

exports.registerUserServices = async (res, data) => {
  // check if user exist
  const isEmail = await User.findOne({ email: data.email });
  if (isEmail) {
    responseError(
      res,
      http.statusInternalServerError,
      "failed",
      "email already in use"
    );
    return;
  }
  // registering the user
  try {
    let newUser = User.create(data);
    if (newUser) {
      return responseSuccess(res, "success", "User registered successfully.", {
        userId: newUser._id,
      });
    }
  } catch (error) {
    return responseError(
      res,
      http.statusInternalServerError,
      "failed",
      error.message
    );
  }
};
