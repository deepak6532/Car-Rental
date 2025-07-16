import React, { useEffect, useState } from 'react';
import axios from 'axios';

import userimage from "../../assets/userimage.jpg"

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('Token');
  console.log("TOKEN",token)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8082/user/alluser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("response",response)
        // setUsers(response.data.users || response.data); // Update if API structure differs
        setUsers(response.data.data)
        console.log("dataf",response.data.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">All Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
          >
            <img
              src={userimage} // random image
              alt="User"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
            />

            <div className="text-center">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="mt-1 text-sm text-blue-600 font-medium capitalize">
                Role: {user.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allusers;
