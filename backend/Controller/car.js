const car  = require("../Model/car")


// add car
exports.addcar = async(req,res) =>{

    
  const data = req.body

  const result = new car(data)
  await result.save()
  return res.status(202).send({ message: "car added success ", result })

}

// getcar

exports.getcar = async(req,res) =>{

    const data = await car.find()
  return res.status(202).send(data)

}