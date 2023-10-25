import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Log in to Your Account</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Facebook Login Button */}
          <button className="w-full py-2 mb-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Log in with Facebook
          </button>

          {/* Google Login Button */}
          <button className="w-full py-2 mb-2 bg-red-600 text-white rounded hover:bg-red-700">
            Log in with Google
          </button>

          {/* Microsoft Login Button */}
          <button className="w-full py-2 mb-2 bg-blue-400 text-white rounded hover:bg-blue-500">
            Log in with Microsoft
          </button>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account? <NavLink to="/signup" className="text-blue-500 hover:underline">Sign up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
