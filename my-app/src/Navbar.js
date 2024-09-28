// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          <Link to="/">CV Builder</Link>
        </div>
        <div className="flex flex-grow justify-center space-x-8">
          <Link to="/" className="text-white text-center font-semibold  bg-sky-500 hover:bg-sky-700 rounded-lg w-[80px] h-[25px]">Home</Link>
          <Link to="/Templates" className="text-white text-center font-semibold  bg-sky-500 hover:bg-sky-700 rounded-lg w-[80px] h-[25px]">Template</Link>
          <Link to="/contact" className="text-white text-center font-semibold  bg-sky-500 hover:bg-sky-700 rounded-lg w-[80px] h-[25px]">Contact</Link>
        </div>
        <div className="flex space-x-6 ml-auto">
          <Link to="/Login">
            <button className="text-white hover:text-gray-300 bg-blue-800 hover:bg-sky-700 rounded-md h-10 w-20">Login</button>
          </Link>
          <Link to="/SignUp">
            <button className="text-white hover:text-gray-300 bg-blue-800 hover:bg-sky-700 rounded-md h-10 w-20">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
