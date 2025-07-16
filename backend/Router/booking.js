const express =  require("express")

const router =  express.Router()

const bookingController =  require("../Controller/booking")


router.post("/book",bookingController.book)

router.get("/allbookcar",bookingController.allbookcar)


module.exports = router

