import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 h-20">
      <div className="container mx-auto flex items-center justify-center h-full">
        <p className="text-gray-600 text-sm text-center mr-5">
          &copy; {new Date().getFullYear()} Cartify. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <NavLink to="/privacy-policy" className="text-gray-600 hover:text-blue-500">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-service" className="text-gray-600 hover:text-blue-500">
            Terms of Service
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
