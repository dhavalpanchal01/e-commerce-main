import React from 'react'
import { NavLink } from 'react-router-dom'


const Poster = () => {
    const posterStyles = {
        backgroundImage: 'url("src\components\poster.jpg")', 
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      };
    
      return (
        <section style={posterStyles} className="text-white p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Shop the Latest Trends</h2>
          <p className="text-xl mb-8">Discover the best deals on fashion, electronics, and more.</p>
          <NavLink to="/products" className="bg-cyan-800 text-white hover:bg-blue-200 py-2 px-4 rounded-full font-semibold transition duration-300">
            Shop Now
          </NavLink>
        </section>
      )
}

export default Poster;
