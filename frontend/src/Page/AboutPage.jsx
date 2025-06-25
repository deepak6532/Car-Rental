import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gradient-to-br from-white via-yellow-50 to-white text-black py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">About Us</h2>
        <p className="text-center text-lg text-gray-600 mb-12 animate-slide-up">
          Premium car rental service built for comfort, convenience, and speed.
        </p>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <img
            src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg"
            alt="Luxury Car"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
          />

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>✅ Wide range of well-maintained cars</li>
              <li>✅ Affordable pricing with no hidden charges</li>
              <li>✅ Easy online booking & cancellation</li>
              <li>✅ 24/7 customer support</li>
              <li>✅ Trusted by thousands of customers</li>
            </ul>
            <p className="mt-6 text-gray-700">
              At <strong>Car Rental</strong>, we believe travel should be easy and accessible. Whether you're commuting in the city or planning a weekend getaway, our cars are ready to go wherever life takes you.
            </p>
          </div>
        </div>

        {/* Electric Vehicle Rental */}
        <div className="mt-16 bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              New!
            </span>
            <h3 className="text-2xl font-bold text-gray-800">Electric Vehicle Rentals</h3>
          </div>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We are excited to introduce our fleet of electric vehicles for rent. Reduce your carbon footprint while enjoying a smooth, quiet ride. Our EVs come with full battery charge, charging cable, and GPS support for nearby charging stations.
          </p>
        </div>

        {/* Collaborate Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Partner with Us – Collaborate Car</h3>
            <p className="text-gray-700 leading-relaxed">
              Do you own a car and want to earn money with it? Join our <strong>Collaborate Car</strong> program and rent your car through our trusted platform. We handle the bookings, insurance, and maintenance while you earn passively.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>No joining fee</li>
              <li>Weekly payouts</li>
              <li>Full car safety insurance</li>
              <li>Support for vehicle tracking & maintenance</li>
            </ul>
          </div>
          <img
            src="https://img.freepik.com/premium-photo/successful-collaboration-businessman-engineer-cement-partnership-car-manufacturing-facility_174533-10392.jpg"
            alt="Collaborate Car"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 text-center gap-6 animate-slide-up">
          <div className="hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-500">5K+</h4>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-500">300+</h4>
            <p className="text-gray-700">Vehicles Available</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <h4 className="text-3xl font-bold text-yellow-500">100%</h4>
            <p className="text-gray-700">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>

<Footer/>
    </>
  );
};

export default AboutPage;
    