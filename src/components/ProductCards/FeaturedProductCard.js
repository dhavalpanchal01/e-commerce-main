import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetailCard from './ProductDetailCard';

const FeaturedProductCard = ({ product }) => {
  
  const maxLength = 60; 

  const truncateDescription = (description) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  const addToCart = () => {
    return (
      <ProductDetailCard product={product} />
    )
  }

  return (

    <Link to={`/products/featured-products/${product.id}`}>
    <div className="w-56 mx-auto overflow-hidden shadow-md rounded-md">
      <div className="relative aspect-w-4 aspect-h-5 mt-2">
        <img src={product.image} alt="Product" className="w-full h-36 object-contain" />
      </div>

      <div className="px-3 py-2 flex flex-col justify-between">
        <div className='h-20'>
          <div className="font-semibold text-xs mb-1">{product.title}</div>
          <div className="h-12 overflow-hidden">
            <p className="text-gray-600 text-xs">
              {truncateDescription(product.description)}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="inline-block bg-green-300 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            Featured
          </span>
          <button onClick={addToCart} className="bg-blue-600 hover-bg-blue-800 text-white font-semibold py-1 px-2 rounded-full text-xs transition duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default FeaturedProductCard;
