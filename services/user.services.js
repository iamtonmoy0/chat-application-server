const { responseError, responseSuccess } = require("response-manager");
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
    let newUser = await User.create(data, { new: true });
    if (newUser) {
      return responseSuccess(
        res,
        http.statusOk,
        "User registered successfully.",
        newUser
      );
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
