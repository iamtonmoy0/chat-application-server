const { responseError } = require("response-manager");
const http = require("response-status-code");
const { registerUserServices } = require("../services/user.services");

exports.RegisterUserController = async (req, res) => {
  try {
    await registerUserServices(res, req.body);
  } catch (error) {
    responseError(res, http.statusInternalServerError, "failed", error.message);
  }
};
