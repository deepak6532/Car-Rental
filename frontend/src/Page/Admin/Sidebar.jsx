import React, { useEffect, useState } from 'react'; // ✅ Fixed: added useState
import { FaHome, FaUsers, FaCar, FaPlusCircle, FaClipboardList ,FaSignOutAlt} from 'react-icons/fa';
import adminImg from '../../assets/admin.png';
import { jwtDecode } from 'jwt-decode';

import { useNavigate } from 'react-router-dom';


const Sidebar = ({ onSectionChange }) => {
  const [adminEmail, setAdminEmail] = useState('');

  const [name,setName] = useState("Admin")

  const  navigate = useNavigate()


  const handelLogout =() =>{

    localStorage.removeItem("Token")

    navigate("/login")
  }

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAdminEmail(decoded.email); // ✅ This will show email if included in token
        console.log("Decoded Email:", decoded);
        const name = decoded.email.split("@")[0]
        setName(name)
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <>
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 shadow-lg sticky top-0 ">
      {/* Admin Profile */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={adminImg}
          alt="Admin"
          className="w-21 h-20 rounded-full border-4 object-cover border-gray-700 mb-2"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{adminEmail || 'admin@carrent.com'}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        <SidebarButton icon={<FaHome />} label="Home" onClick={() => onSectionChange('/home')} />
        <SidebarButton icon={<FaUsers />} label="All Users" onClick={() => onSectionChange('/alluser')} />
        <SidebarButton icon={<FaPlusCircle />} label="Add Car" onClick={() => onSectionChange('/addcar')} />
        <SidebarButton icon={<FaCar />} label="All Cars" onClick={() => onSectionChange('/cars')} />
        <SidebarButton icon={<FaClipboardList />} label="Book Car" onClick={() => onSectionChange('/bookingcar')} />
        
          
      </nav>
    </div>

  

     </>
  );  
};

const SidebarButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-md transition-all duration-200"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>


  
  
 
);

export default Sidebar;
