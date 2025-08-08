const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require('nodemailer')

// import env file
const env = require("dotenv")
env.config()

const app = express()
const port = 8082

const mongourl = "mongodb+srv://deepak:1234@cluster0.4xnptxf.mongodb.net/"
mongoose.connect(mongourl)

app.use(express.json())
app.use(cors())

          



const carRouter =  require("./Router/car")
app.use("/cars",carRouter)


const bookingRouter  = require("./Router/booking")
app.use("/booking",bookingRouter)


const contactRouter =  require("./Router/contact")
app.use("/contact",contactRouter)


const userRouter =  require("./Router/user")
app.use("/user",userRouter)


app.listen(port, () => {
  console.log("server is running on this port", port)
})