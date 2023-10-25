import React, { useState, useContext } from 'react';
import ProductContext from '../../context/productContext';
import { NavLink } from 'react-router-dom';


const ProductCard = (props) => {

  // const [cartArray, setCartArray] = useState([]);
  

  const { productOfCart ,setProductOfCart} = useContext(ProductContext);

  
  
  function addToCart(product){
    setProductOfCart((prev) => [...prev, product]);
    console.log(product)
  }

  console.log(productOfCart)



  return (
    <div id={props.product.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 my-5">
      <NavLink to={`/products/${props.product.id}`}>
        <div className="relative">
          <img
            className="w-full h-72"
            src={props.product.images[3]}
            alt="Product"
          />
          <div className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-bl">
            {props.product.discountPercentage}%
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.product.title}</div>
          <p className="text-gray-700 text-base">{props.product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base">${props.product.price}</p>
          <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star${index < Math.floor(props.product.rating) ? ' text-yellow-400' : ' text-gray-400'}`}
                  ></i>
                ))}
                {props.product.rating}
              </div>
        </div>
      </NavLink>
      <div className="px-6 pb-4">
        <button onClick={() => addToCart(props.product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
