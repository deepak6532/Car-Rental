import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'




const Addcar = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()
  

  const handelSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8082/cars/addcar", { name, type, price,image})
      .then(result => {
        console.log("Result:-", result)
        alert(result.data.message)
        
        
      })
      .catch(err => {
        console.log("error:-", err)
        alert("Error occurred!")
      })
  }

  return (
    <>
     
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6"> ADD CAR</h2>
        <form onSubmit={handelSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1" >Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1" >Type</label>
            <input
              type="type"
              value={type}
              onChange={e => setType(e.target.value)}
              placeholder="Enter car type"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1" >Price</label>
            <input
              type="Number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1" >Image</label>
            <input
              type="text"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="Enter Image Url"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Add Car
          </button>
        </form>


      </div>
    </div>

   
     </>
  )
}

export default Addcar
