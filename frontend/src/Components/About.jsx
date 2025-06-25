import React from 'react'
import { Link } from 'react-router-dom'

import  CarAbout from '../assets/CarAbout.png'

const About = () => {
  return (
    <div className="duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-gray-100 mt-5">

    <div className="container mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            {/* <div>
                <img src={CarAbout} alt=''
                className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'></img>
            </div> */}

            <div>
            <img
              src={CarAbout}
              alt="CarAbout"
              className="transition-transform duration-400 hover:scale-120 sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>


            <div className='sm:ml-10' >
                <div className="space-y-5 sm:p-16 pb-6  p-5 ">
                    <h1 className="text-3xl sm:text-4xl font-bold font-serif ">About us</h1>

                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic animi modi veritatis ex porro.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nobis.</p>

                <button className="rounded-md border-2 font-semibold border-yellow-400 hover:bg-yellow-400 hover:text-black duration-500 py-2 px-6 text-yellow-400 tracking-wider cursor-pointer ">
               <Link to="/aboutpage"> Get Started</Link>
                </button>
                </div>


            </div>
        </div>
    </div>
    
    
    
    
    </div>
  )
}

export default About