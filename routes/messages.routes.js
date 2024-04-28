const { getMessagesByConversationIdController } = require("../controllers/messages.controller")

const router=require("express").Router()



router.route("/messages").get(getMessagesByConversationIdController)


module.exports=router