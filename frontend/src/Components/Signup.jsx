import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'



const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  

  const handelSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8082/user/signup", { name, email, password })
      .then(result => {
        console.log("Result:-", result)
        alert(result.data.message)
        
        setName("")
        setEmail("")
        setPassword("")

        navigate("/login")
      })
      .catch(err => {
        console.log("error:-", err)
        alert("Error occurred!")
      })
  }

  return (
    <>
      {/* <Navbar/> */}
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">User SignUp</h2>
        <form onSubmit={handelSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-blue-500 text-center m-2 ">Already have an account ?
        <Link to="/login" className=' text-red-600 hover:cursor-pointer '>Login here</Link>
        </p>
      </div>
    </div>

    {/* <Footer/> */}
     </>
  )
}

export default Signup
