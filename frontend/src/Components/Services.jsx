import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
const skillData = [

    {
        name: "Best Price",
        icon: (<FaCameraRetro className='text-5xl text-yellow-400 group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nobis",

    },
    {
        name: "Fast and Safe",
        icon: (<GiNotebook className='text-5xl text-yellow-400 group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nobis",

    },
    {
        name: "Experience Drivers",
        icon: (<SlNote className='text-5xl text-yellow-400 group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nobis",

    }
]

const Services = () => {
    return (
        <div className='py-12 bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center'>
            <div className='container'>
                <div className="pb-12">
                    <h1
                        className="text-3xl font-semibold text-center font-serif sm:text-4xl">
                        Why Choose Us</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 '>
                    {
                        skillData.map((skill) => (

                            <div key={skill.name}
                            className='card text-center group space-y-3 sm:space-y-6 p-4 py-2 sm:py-16 bg-[#111111] text-white hover:bg-yellow-300 hover:text-black duration-300 rounded-lg'
                            >
                                <div className='grid place-items-center'>
                                    {skill.icon}
                                </div>
                                <h1>{skill.name}</h1>
                                <p>{skill.description}</p>
                                <a href={skill.link}>Learn More</a>
                            </div>

                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default Services