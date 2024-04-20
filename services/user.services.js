const { responseError, responseSuccess } = require("response-manager");
const http = require("response-status-code");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
exports.registerUserServices = async (res, data) => {
  try {
    // check if user exist
    const isEmail = await User.findOne({ email: data.email });
    if (isEmail) {
      return responseError(
        res,
        http.statusInternalServerError,
        "failed",
        "email already in use"
      );
    }
    // registering the user
    let newUser = await User.create(data);
    // console.log(newUser);
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
// login
exports.loginUserServices = async (res, data) => {
  const isUser = await User.findOne({ email: data.email });
  if (!isUser) {
    return responseError(
      res,
      http.statusInternalServerError,
      "failed",
      "invalid credentials"
    );
  }
  const validPassword = await bcrypt.compareSync(
    data.password,
    isUser.password
  );
  if (!validPassword) {
    return responseError(
      res,
      http.statusUnauthorized,
      "failed",
      "Invalid password."
    );
  } else {
    return responseSuccess(res, http.statusOk, "success", isUser);
  }
};
