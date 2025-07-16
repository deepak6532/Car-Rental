const contact = require("../Model/contact")

const nodemailer=  require("nodemailer")


exports.contact = async(req,res)=>{

     const { name, phone, email, message } = req.body

      const data = {
        name, phone, email, message
      }
    
      const result = new contact(data)

 
      console.log("result contact",result)
    
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


}