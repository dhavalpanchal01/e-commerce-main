import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = ({ errorCode, errorMessage }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Error {errorCode}</h2>

        <p className="text-gray-700 text-sm text-center mb-4">
          {errorMessage || 'An error occurred.'}
        </p>

        <div className="text-center">
          <NavLink to="/" className="text-blue-500 hover:underline">Back to Home</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
