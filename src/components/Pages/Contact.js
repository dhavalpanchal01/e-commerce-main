import React, { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form
          action="https://formspree.io/f/xwkdablk"
          method="POST"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Your email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Your message:</label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"
            ></textarea>
          </div>
          {/* Add your other form fields here */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
