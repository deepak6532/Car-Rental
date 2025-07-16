import axios from 'axios'
import React, { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role,setRole] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await axios.post("http://localhost:8082/user/login", { email, password,role })

      if (result.data.token) {
        localStorage.setItem("Token", result.data.token)
      }

      if (result.data.message) {
        alert(result.data.message)
        console.log("Result:", result)
        setEmail("")
        setPassword("")
        setRole("")

        if(role === "admin")
        {
          navigate("/dashboard")
        }
        else if(role ==="user")
        {

        navigate("/home")
        }


      }
    } catch (err) {
      const message = err.response?.data?.message || "Error occurred"
      alert(message)
      console.error("Login error:", err)
    }
  }

  return (
    
    <>
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div>
            <label className="block text-gray-700 font-semibold mb-1" >Role</label>
            <input
              type="role"
              value={role}
              onChange={e => setRole(e.target.value)}
              placeholder="Role"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-blue-500 text-center m-2 ">Not a member ?
        <Link to="/" className=' text-red-600 hover:cursor-pointer '> signup now</Link>
        </p>
      </div>
    </div>

   
    </>
 
  )
}

export default Login
