import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

const ProductDetailCard = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not okay');
        }

        const recProduct = await response.json();
        setProduct(recProduct);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {loading && <Loader />}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img src={product.thumbnail} alt={product.title} className="w-full h-auto object-contain" />
          </div>
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 text-base mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl text-gray-700 mr-2 line-through">${product.price}</span>
              <span className="text-green-600 text-xl font-semibold">
                ${product.price - product.price * (product.discountPercentage / 100)}
              </span>
            </div>
            <p className="text-gray-600 mb-4">In Stock: {product.stock} items</p>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-2">Rating:</span>
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star${index < Math.floor(product.rating) ? ' text-yellow-400' : ' text-gray-400'}`}
                  ></i>
                ))}
              </div>
              <span className="ml-2 text-gray-700">{product.rating}</span>
            </div>
            <p className="text-gray-600">Category: {product.category}</p>
          </div>
      
        </div>
        <div className="px-6 pb-4 mt-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
              Add to Cart
            </button>
          </div>
      </div>
    </>
  );
};

export default ProductDetailCard;
