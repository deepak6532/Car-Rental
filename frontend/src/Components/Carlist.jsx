import React from 'react'
import { Link } from 'react-router-dom'

import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png"

const CarList = [

    {
        name: "BMW UX",
        price: 100,
        image: car1,

    },
    {
        name: "SCORPIO S11",
        price: 80,
        image: car2,

    },
    {
        name: "KIA UX",
        price: 100,
        image: car3,

    },

]

const Carlist = () => {
return (
<div className='pb-24 pt-12  bg-white '>
    <div className="container mx-auto">
        {/* heading */}
        <h1 className='text-3xl sm:text-4xl font-semibold font-serif mb-3 ml-10'>Lorem, ipsum dolor.</h1>
        <p className='text-sm pb-10 ml-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, praesentium!</p>


        {/* car listing */}
        <div >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-10'>
                {
                    CarList.map((data) => {
                        return (
                            <div className="space-y-3 border-2 border-gray-300 hover:border-yellow-400 p-3 rounded-xl relative group">
                                <div className='w-full h-[120px]'>
                                    <img
                                    src={data.image}
                                    alt="" 
                                    className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700'
                                    />

                                </div>
                                <div className='space-y-2'> 
                                    <h1 className='text-yellow-400 font-semibold'>{data.name}</h1>
                                
                                <div className=' flex justify-between items-center text-xl font-semibold'>
                                    <p>${data.price} /Day</p>
                                    <a href='#'>Details</a>
                                </div>
                                </div>
                                <p className='text-xl font-semibold absolute top-1 left-3 '>12Km</p>

                            </div>
                            
                        )
                    }

                    )
                }

            </div>
        </div>

        <div className='grid  place-items-center mt-8'>
        <button className="rounded-md border-2 font-semibold border-yellow-400 hover:bg-yellow-400 hover:text-black duration-500 py-2 px-6 text-yellow-400 tracking-wider cursor-pointer ">
        <Link to="/carpage"> Get Started </Link>
        </button>
        </div>

    </div>
</div>
    )
}

export default Carlist