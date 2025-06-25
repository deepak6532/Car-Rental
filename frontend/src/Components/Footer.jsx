import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const FooterLinks = [

    {
        title: "Home",
        link: "/",
    },
    {
        title: "Cars",
        link: "/carpage",
    },
    {
        title: "Contact",
        link: "/contactpage",
    },
    {
        title: "Booking",
        link: "/booking",
    },
]

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-14 rounded-t-3xl'>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 py-5">

                    {/* office detail */}
                    <div className='py-8 px-4'>

                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center '>Car Rental</h1>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos, quidem quae voluptatum ratione maxime!
                        </p>
                        <br />
                        <div className='flex items-center gap-3 '>
                            <FaLocationArrow />
                            <p>Noida Uttar PRadesh</p>

                        </div>
                        <div className='flex items-center gap-3 '>
                            <FaMobileAlt />
                            <p>+91 123-1234-123</p>
                           
                        </div>
                         <h2 className='mt-1'>DG@gmail.com</h2>
                        {/* social Handles */}
                        <div className='flex items-center gap-3 mt-6 '>
                            <a href='#'>
                                <FaInstagram className=" text-3xl hover:text-yellow-400 duration-300" />
                            </a>
                            <a href='#'>
                                <FaFacebook className=" text-3xl hover:text-yellow-400 duration-300" />
                            </a>
                            <a href='#'>
                                <FaLinkedin className=" text-3xl hover:text-yellow-400 duration-300" />
                            </a>

                        </div>
                        
                    </div>

{/* Navlinks */}
<div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
    
    {/* first important link */}
<div>
    <div className='py-8 px-4'>
        <h1 className='text-xl  font-bold sm:text-left text-justify mb-3'>Important Links</h1>
            <ul className='flex flex-col gap-3'>
        {
        FooterLinks.map((data) => {
            return (
                <li key={data.title}
                    className='cursor-pointer hover:text-yellow-400 duration-300'
                >
                    <span className="mr-2">&#11162;</span>
                    <a href={data.link}>{data.title}</a>
                    
                </li>

                // <span>&#11162;</span>


            );
        })
        }
    </ul>
</div>
</div>

   {/* second important link */}
<div>
    <div className='py-8 px-4'>
        <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
            <ul className='flex flex-col gap-3'>
        {
        FooterLinks.map((data) => {
            return (
                <li key={data.title}
                    className='cursor-pointer hover:text-yellow-400 duration-300'
                >
                    <span className="mr-2">&#11162;</span>
                    <a href={data.link}>{data.title}</a>
                    
                </li>

                // <span>&#11162;</span>


            );
        })
        }
    </ul>
</div>
</div>


   {/* third important link */}
<div>
    <div className='py-8 px-4'>
        <h1 className='text-xl  font-bold sm:text-left text-justify mb-3'>Important Links</h1>
            <ul className='flex flex-col gap-3'>
        {
        FooterLinks.map((data) => {
            return (
                <li key={data.title}
                    className='cursor-pointer hover:text-yellow-400 duration-300'
                >
                    <span className="mr-2">&#11162;</span>
                    <a href={data.link}>{data.title}</a>
                    
                </li>

                // <span>&#11162;</span>


            );
        })
        }
    </ul>
</div>
</div>

</div>

     </div>
    </div>
</div>
)
}

export default Footer