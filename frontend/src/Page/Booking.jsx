import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import axios from "axios"

const BookingPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    aadhar: '',
    carModel: '',
    carName: '',
    carType: '',
    DriveOption:'',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
  });

  const carModels = ['Economy', 'Luxury', 'Off-road', 'Compact'];
  const carNames = ['Toyota Innova', 'Hyundai Creta', 'Tata Nexon', 'Mahindra Thar'];
  const carTypes = ['Petrol', 'Electric'];
  const DriveOption = ['Self Drive', 'With Drive'];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8082/booking/book", formData)
      .then(result => {

        alert(`✅ Thank you ${formData.name}, your booking for a ${formData.carType} ${formData.carName} (${formData.carModel}) is confirmed!`);
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          aadhar: '',
          carModel: '',
          carName: '',
          carType: '',
          DriveOption:'',
          pickupDate: '',
          pickupTime: '',
          returnDate: '',
          returnTime: '',
        });

      })
      .catch(err => {
        alert("failed try again!")
      })
  };


  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-white via-yellow-50 to-yellow-100 min-h-screen py-10 px-2 sm:px-6 lg:px-15 transition-all duration-500 ease-in-out">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8 transform transition duration-500 hover:scale-[1.02]">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-yellow-600">
            Book Your Ride
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              />
            </div>

            {/* Aadhar Number */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Aadhar Number</label>
              <input
                type="text"
                name="aadhar"
                required
                maxLength={12}
                pattern="\d{12}"
                value={formData.aadhar}
                onChange={handleChange}
                placeholder="123412341234"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              />
            </div>

            {/* Car Model */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Car Model</label>
              <select
                name="carModel"
                required
                value={formData.carModel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              >
                <option value="">-- Select Car Model --</option>
                {carModels.map((model, idx) => (
                  <option key={idx} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Car Name */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Car Name</label>
              <select
                name="carName"
                required
                value={formData.carName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              >
                <option value="">-- Select Car Name --</option>
                {carNames.map((name, idx) => (
                  <option key={idx} value={name}>{name}</option>
                ))}
              </select>
            </div>

            {/* Car Type */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Car Type</label>
              <select
                name="carType"
                required
                value={formData.carType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              >
                <option value="">-- Choose Car Type --</option>
                {carTypes.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>

           
            {/* Drive Option */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Drive Option</label>
              <select
                name="DriveOption"
                required
                value={formData.DriveOption}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
              >
                <option value="">-- Select Drive Option --</option>
                {DriveOption.map((d, idx) => (
                  <option key={idx} value={d}>{d}</option>
                ))}
              </select>
            </div>




            {/* Pickup and Return Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Pickup Time</label>
                <input
                  type="time"
                  name="pickupTime"
                  required
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  required
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-700">Return Time</label>
                <input
                  type="time"
                  name="returnTime"
                  required
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              🚗 Confirm Booking
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;




