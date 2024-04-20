const { responseError } = require("response-manager");
const http = require("response-status-code");
const {
  registerUserServices,
  loginUserServices,
} = require("../services/user.services");

exports.RegisterUserController = async (req, res) => {
  try {
    await registerUserServices(res, req.body);
  } catch (error) {
    responseError(res, http.statusInternalServerError, "failed", error.message);
  }
};
// login controller

exports.LoginUserController = async (req, res) => {
  try {
    await loginUserServices(res, req.body);
  } catch (error) {
    responseError(res, http.statusInternalServerError, "failed", error.message);
  }
};
