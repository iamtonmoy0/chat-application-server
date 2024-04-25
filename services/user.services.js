const { responseError, responseSuccess } = require("response-manager");
const http = require("response-status-code");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/jwt.helpers");
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
    // generate token
    const token = await generateToken(newUser.id);
    if (newUser) {
      const data = {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      };
      return responseSuccess(
        res,
        http.statusOk,
        "User registered successfully.",
        { token, user: data }
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
    const token = await generateToken(isUser.id);
    const data = {
      id: isUser._id,
      email: isUser.email,
      name: isUser.name,
    };
    return responseSuccess(res, http.statusOk, "success", {
      token,
      user: data,
    });
  }
};
