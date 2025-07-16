const mongoose = require("mongoose")

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
    }, { timestamps: true }
        
)



const contact = mongoose.model("contact", contactSchema)

module.exports  =  contact