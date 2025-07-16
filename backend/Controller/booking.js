const booking = require("../Model/booking")
const nodemailer = require('nodemailer')

exports.book = async (req, res) => {
    const {
        name, email, aadhar, carModel, carName,
        carType, DriveOption, pickupDate, pickupTime,
        returnDate, returnTime
    } = req.body

    let BookId = ""
    const length = 6
    for (let i = 0; i < length; i++) {
        BookId += Math.floor(Math.random() * 10)
    }

    const data = {
        name, email, aadhar, carModel, carName,
        carType, DriveOption, pickupDate, pickupTime,
        returnDate, returnTime, BookId
    }

    const result = new booking(data)

    const Transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.Email,
            pass: process.env.Password
        }
    })


    console.log("Result:", result)
    await result.save()

    await Transporter.sendMail({
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
    })

    return res.status(202).send({ message: "Booking confirmed", result })
}


// get all book car

exports.allbookcar = async (req,res) =>{

    const data =  await booking.find()

    return res.status(202).send({message:"All Booked Car",data})
}