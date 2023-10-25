import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-cyan-800 p-4">
    <div className="container mx-auto flex items-center justify-between">
      <NavLink to="/" className="text-white text-2xl font-bold">
        Cartify
      </NavLink>

      <div className="space-x-4 flex items-center">
        <NavLink to="" className="text-white hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:underline">
          About
        </NavLink>
        <NavLink to="/contact" className="text-white hover:underline">
          Contact
        </NavLink>
        <NavLink to="/products" className="text-white hover:underline">
          Products
        </NavLink>  
        <NavLink to="/login" className="text-white hover:underline">
          Login
        </NavLink>
        <div className="relative group inline-block">
          <NavLink to="/cart" className="text-white hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;

