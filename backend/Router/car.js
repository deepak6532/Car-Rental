const express = require("express")

const router = express.Router()

const carController=   require("../Controller/car")


router.post("/addcar",carController.addcar)

router.get("/getcar" ,carController.getcar)

module.exports = router