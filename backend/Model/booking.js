const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  aadhar: {
    type: String,
    required: true,
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
    required: true,
    enum: ['Self Drive', 'With Drive']
  },
  pickupDate: {
    type: String,
    required: true
  },
  pickupTime: {
    type: String,
    required: true
  },
  returnDate: {
    type: String,
    required: true
  },
  returnTime: {
    type: String,
    required: true
  },
  BookId: {
    type: String,
    required: true
  }
}, { timestamps: true })

const booking = mongoose.model("booking", bookingSchema)

module.exports = booking
