const mongoose =  require("mongoose");

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

module.exports = car