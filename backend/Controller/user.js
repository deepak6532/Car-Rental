const user =  require("../Model/user")

const bcrypt =   require("bcrypt")
const jwt =  require("jsonwebtoken")

const secretKey =  "asdfgghjkl"


exports.signup = async(req,res)=>{

    const {name,email,password,role} = req.body


    const alreadyEmail =  await user.findOne({email})

    if(alreadyEmail)
    {
        return res.status(404).send({message:"user already exists car"})
    }


    const salt =  bcrypt.genSaltSync(10)
    const hash =  bcrypt.hashSync(password,salt)

    const newRole =  role ? role : "user"

    const data = {
        name,email,password:hash,role:newRole
    }

    const result  =  new user(data)
    await result.save()

    return res.status(202).send({message:"singup success",result})

}

// user login 

exports.login =  async(req,res) =>{


    const {email,password,role} =  req.body


    const alreadyEmail  = await user.findOne({email})

    if(!alreadyEmail)
    {
        return res.status(404).send({message:"user not exists signup first!"})
    }


    const dbrole =  alreadyEmail.role

    const dbpassword =  alreadyEmail.password

    const token =  jwt.sign({email},secretKey)

    console.log(">>>>token",token)


    const match = await bcrypt.compare(password,dbpassword)

    if(!match)
    {
        return res.status(404).send({message:"incorrect password"})
    }

    if(dbrole === role)
    {
    return res.status(202).send({message:"login success",token})
    }
    else
    {
        return res.status(404).send({message:"Role does not match"})
    }

}


// all user 

exports.alluser = async(req,res)=>{

    const role =  req.userDetail.role

    // const role ="admin"
    console.log("check role in user controller",role)
    
    if(role === "admin")
    {

    const data  = await user.find()

    return res.status(202).send({message:"All User ",data})

    }
    else
    {
        return res.status(404).send({message:"use are not eligible to show all user"})
    }

}