const { responseError } = require("response-manager")
const { getMessagesByConversationIdService } = require("../services/message.services")

exports.getMessagesByConversationIdController=async(req,res)=>{
    try {
        await getMessagesByConversationIdService(res,req.query)
    } catch (error) {
        return responseError(res,400,"failed",error.message)
    }
}