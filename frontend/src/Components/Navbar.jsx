import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and close icon
// import Contact from './Contact';

// import ContactPage from '../Page/ContactPage';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="shadow-md bg-white text-black   w-full relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl ml-4 font-bold font-serif cursor-pointer hover:text-yellow-600 transition-colors duration-30">Car Rental </h1>

          {/* Desktop Menu */}


          {/* nav-link = > <a href="#" className="inline-block py-2 border-b-2 border-transparent hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 text-lg font-medium">
                        Home
                    </a> */}

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link to="/" className="nav-link  text-xl hover:border-b-yellow-800 hover:text-yellow-400 transition-colors duration-300 font-bold">Home</Link>
            </li>
            <li>
              <Link to="/carpage" className="nav-link text-xl hover:border-b-yellow-800 hover:text-yellow-400 transition-colors duration-300 font-bold">Cars</Link>
            </li>
            <li>
              <Link to="/aboutpage" className="nav-link text-xl hover:border-b-yellow-800 hover:text-yellow-400 transition-colors duration-300 font-bold">About</Link>
            </li>
            <li>
              <Link to="/booking" className="nav-link text-xl hover:border-b-yellow-800 hover:text-yellow-400 transition-colors duration-300 font-bold">Booking</Link>
            </li>
            <li>
              <Link to="/contactpage" className="nav-link text-xl hover:border-b-yellow-800 hover:text-yellow-400 transition-colors duration-300 font-bold">Contact</Link>
            </li>
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 text-black px-6 py-4 hover:text-yellow-400 cursor-pointer">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400 transition-colors duration-300">Home</Link>
            </li>
            <li>
             <Link to="/carpage" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400 transition-colors duration-300">Cars</Link>
            </li>
            <li>
              <Link to="/aboutpage" onClick={() => setIsOpen(false)} className="nav-link text-xl hover:text-yellow-400 transition-colors duration-300">About</Link>
            </li>
            <li>
             <Link to="/booking" onClick={() => setIsOpen(false)} className="nav-link   text-xl hover:text-yellow-400 transition-colors duration-300">Booking</Link>
            </li>
            <li>
             <Link to="/contactpage" onClick={() => setIsOpen(false)} className="nav-link   text-xl hover:text-yellow-400 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
