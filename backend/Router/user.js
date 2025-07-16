const express  = require("express")

const router =  express.Router()

const userController =  require("../Controller/user")

const auth = require("../middleware/auth")

router.post("/signup",userController.signup)

router.post("/login",userController.login)

router.get("/alluser",auth,userController.alluser)


module.exports =  router