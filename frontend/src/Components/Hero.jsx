import React from 'react';
import carh from '../assets/carh.png';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white text-black duration-300 ">
      <div className="container mx-auto min-h-[620px] grid grid-cols-1 sm:grid-cols-2 place-items-center px-4">

        <div className="order-1 sm:order-2">
          <img
            src={carh}
            alt="Carh"
            className="max-h-[600px] w-full object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
          />
        </div>


        <div className="order-2 sm:order-1 space-y-5 sm:pr-12 text-center sm:text-left">

          <p className="text-[#ffc727] font-serif text-2xl">Effortless</p>
          <h1 className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab
          </p>

          <button className=" bg-yellow-400  hover:bg-[#ffd252]  cursor-pointer text-black font-serif py-2 px-6 rounded transition duration-300">
            <Link to="/booking">Get Started </Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
