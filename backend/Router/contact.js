const express =  require("express")


const router  = express.Router()

const contactController =  require("../Controller/contact")


router.post('/contact',contactController.contact)


module.exports =  router