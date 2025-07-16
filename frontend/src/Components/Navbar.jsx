import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // hi
  const [showMobileProfileDropdown, setShowMobileProfileDropdown] = useState(false); // hi
  const navigate = useNavigate(); // hi

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <nav className="shadow-md bg-white text-black w-full relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl ml-4 font-bold font-serif cursor-pointer hover:text-yellow-600 transition-colors duration-300">Car Rental</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li><Link to="/home" className="nav-link text-xl hover:text-yellow-400 font-bold">Home</Link></li>
            <li><Link to="/carpage" className="nav-link text-xl hover:text-yellow-400 font-bold">Cars</Link></li>
            <li><Link to="/aboutpage" className="nav-link text-xl hover:text-yellow-400 font-bold">About</Link></li>
            <li><Link to="/booking" className="nav-link text-xl hover:text-yellow-400 font-bold">Booking</Link></li>
            <li><Link to="/contactpage" className="nav-link text-xl hover:text-yellow-400 font-bold">Contact</Link></li>
          </ul>

          {/* Profile Icon for All Views  */}
          <div className="relative md:block hidden">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              onBlur={() => setTimeout(() => setShowProfileDropdown(false), 150)}
              className="text-3xl hover:text-yellow-400 transition-colors duration-300"
            >
              <CgProfile />
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="flex flex-col py-2">
                  <li><Link to="/" className="block px-4 py-2 hover:bg-yellow-100">Signup</Link></li>
                  <li><Link to="/login" className="block px-4 py-2 hover:bg-yellow-100">Login</Link></li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block text-left w-full px-4 py-2 hover:bg-yellow-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden ml-4"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 text-black px-6 py-4">
          <ul className="flex flex-col gap-4">

                        {/* Mobile Profile Dropdown - hi */}
            <li className="relative">
              <button
                onClick={() => setShowMobileProfileDropdown(!showMobileProfileDropdown)}
                className="text-2xl flex items-center gap-2 hover:text-yellow-400"
              >
                <CgProfile /> Profile
              </button>

              {showMobileProfileDropdown && (
                <ul className="mt-2 ml-2 border border-gray-200 rounded bg-white shadow-md w-36 z-40">
                  <li><Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-yellow-100">Signup</Link></li>
                  <li><Link to="/login" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-yellow-100">Login</Link></li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-yellow-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
              
            </li>
            <li><Link to="/home" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400">Home</Link></li>
            <li><Link to="/carpage" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400">Cars</Link></li>
            <li><Link to="/aboutpage" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400">About</Link></li>
            <li><Link to="/booking" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400">Booking</Link></li>
            <li><Link to="/contactpage" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400">Contact</Link></li>


          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
