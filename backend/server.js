const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require('nodemailer')

// import env file
const env = require("dotenv")
env.config()

const app = express()
const port = 8082

const mongourl = "mongodb://localhost:27017/CarRental"
mongoose.connect(mongourl)

app.use(express.json())
app.use(cors())

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    // unique:true
  },
  aadhar: {
    type: String,
    require: true,
    match: /^\d{12}$/
  },
  carModel: {
    type: String,
    required: true,
    enum: ['Economy', 'Luxury', 'Off-road', 'Compact']
  },
  carName: {
    type: String,
    required: true,
    enum: ['Toyota Innova', 'Hyundai Creta', 'Tata Nexon', 'Mahindra Thar']
  },

  carType: {
    type: String,
    required: true,
    enum: ['Petrol', 'Electric']
  },
  DriveOption: {
    type: String,
    require: true,
    enum: ['Self Drive', 'With Drive']

  },

  pickupDate: {
    type: String,
    require: true
  },

  pickupTime: {
    type: String,
    require: true
  },

  returnDate: {
    type: String,
    require: true
  },

  returnTime: {
    type: String,
    require: true
  },
  BookId: {
    type: Number,
    require: true
  }

}, { timestamps: true })

const user = mongoose.model("user", userSchema)



const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  }
}, { timestamps: true })

const contact = mongoose.model("contact", contactSchema)



// car schema
const carSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
    unique: true
  },
  type: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  image: {
    type: String,
    require: true
  },

})

const car = mongoose.model("car", carSchema)

// add car in database api
app.post("/addcar", async (req, res) => {

  // const {name,type,price,image} = req.body

  const data = req.body

  const result = new car(data)
  await result.save()
  return res.status(202).send({ message: "car added success ", result })

})

// get car api


app.get("/getcar", async (req, res) => {

  const data = await car.find()
  return res.status(202).send(data)
})



// car book api
app.post('/book', async (req, res) => {

  // const data = req.body

  const { name,
    email,
    aadhar,
    carModel,
    carName,
    carType,
    DriveOption,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime, } = req.body


  let BookId = ""
  let length = 6

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * 10)
    BookId += random
  }



  const data = {
    name,
    email,
    aadhar,
    carModel,
    carName,
    carType,
    DriveOption,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime,
    BookId,
  }
  
  console.log("process.env.email.................",process.env.Email)
  const result = new user(data)

  // console.log("process.env.email.................",process.env.Email)

  const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.Email,
      pass: process.env.Password
    },

  });


  await result.save()


  const info = Transporter.sendMail({
    from: process.env.Email,
    to: email,
    subject: "Booking Confirmation",
    text: `✅ Thank you ${name}, your booking for a ${carType} ${carName} (${carModel}) is confirmed!
    
    
 ============================
🆔 BOOKING ID: ${BookId}
============================

🚘 Drive Option: ${DriveOption}

🗓️ Pickup Date: ${pickupDate} at ⏰ ${pickupTime}  
🗓️ Return Date: ${returnDate} at ⏰ ${returnTime}

Please present your Booking ID to the car owner at the time of pickup.

If you have any questions or need support, feel free to reply to this email.

We look forward to serving you!

Warm regards,  
CarRental Support Team`

  });

  return res.status(202).send({ message: "Booking confirm", result })
})



// contact api
app.post('/contact', async (req, res) => {

  // const data = req.body

  const { name, phone, email, message } = req.body
  const data = {
    name, phone, email, message
  }

  const result = new contact(data)

  await result.save()
  const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.Email,
      pass: process.env.Password
    },

  });


  const info = Transporter.sendMail({
    from: process.env.Email,
    to: email,
    subject: "We Appreciate Your Message - Our Team Will Respond Soon",
    text: `📨 Thank you ${name} 
Thank you so much for reaching out to us. We truly appreciate your interest and the time you took to connect with us.

Your message has been received, and our team is carefully reviewing it. We will get back to you at the earliest with the information or assistance you need.

Please feel free to reply to this email if you have any additional questions in the meantime.

Warm regards,  
Deepak Gupta  
CarRental Support Team `
  });


  return res.status(202).send(result)
})


app.listen(port, () => {
  console.log("server is running on this port", port)
})