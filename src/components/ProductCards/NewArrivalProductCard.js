import React from 'react';
import { Link } from 'react-router-dom';

function NewArrivalProductCard({ product }) {
  const maxLength = 60;

  const truncateDescription = (description) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <Link to={`/products/new-arrival-products/${product.id}`} >
    <div className="w-72 mx-2 overflow-hidden shadow-md rounded-md">
      <div className="relative aspect-w-4 aspect-h-6 mt">
        <img src={product.image} alt="Product" className="w-full h-72 object-contain" />
      </div>

      <div className="px-3 py-4 flex flex-col justify-between">
        <div>
          <div className="font-semibold text-xs mb-1">{product.title}</div>
          <div className="h-12 overflow-hidden">
            <p className="text-gray-700 text-xs">
              {truncateDescription(product.description)}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="inline-block bg-red-400 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            New Arrival
          </span>
          <button className="block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default NewArrivalProductCard;
