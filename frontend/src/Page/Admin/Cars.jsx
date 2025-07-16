import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Cars = ()=>{
  
  const [cars, setCar] = useState([]);

  useEffect(()=>{

  axios.get("http://localhost:8082/cars/getcar")
  .then((res)=>
    setCar(res.data))
  .catch((err) => console.error('Error fetching cars:', err));

  
},[]);



// const CarPage = () => {
  return (
    <>

    <div className="bg-gray-200 min-h-screen p-10 pt-10">
      <h1 className="text-3xl font-bold text-center mb-10 font-serif ">Available Cars</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-500">Type: {car.type}</p>
              <p className="text-yellow-600 font-bold text-lg mt-2">₹{car.price}/day</p>
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
               <Link to="/booking" > Book Now </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  );
};



export default Cars;
