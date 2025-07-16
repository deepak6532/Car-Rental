import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCar, FaUser, FaCalendarAlt, FaClock, FaIdBadge } from 'react-icons/fa';

const Bookcar = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8082/booking/allbookcar');
        console.log("Bookings:", response.data.data);
        setBookings(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p className="text-gray-600 text-center">Loading bookings...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">All Car Bookings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6"
          >
            <div className="mb-4 border-b pb-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                <FaIdBadge className="inline mr-2 text-blue-600" />
                Booking ID: {booking.BookId}
              </h3>
              <p className="text-sm text-gray-500">Aadhar: {booking.aadhar}</p>
            </div>

            <div className="space-y-2 text-sm">
              <p><FaUser className="inline mr-2 text-green-600" /> <strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><FaCar className="inline mr-2 text-purple-600" /> <strong>Car:</strong> {booking.carName} ({booking.carModel}, {booking.carType})</p>
              <p><strong>Drive Option:</strong> {booking.DriveOption}</p>
              <p><FaCalendarAlt className="inline mr-2 text-orange-600" /> <strong>Pickup:</strong> {booking.pickupDate} at {booking.pickupTime}</p>
              <p><FaCalendarAlt className="inline mr-2 text-red-600" /> <strong>Return:</strong> {booking.returnDate} at {booking.returnTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookcar;
