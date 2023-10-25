import React, { useState } from 'react';

const CartProduct = ({ product }) => {


  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.price);

  const rmvProduct = () => {

  }

  const IncQuantity = () => {
    const newQuantity = quantity + 1;
    const newPrice = product.price * newQuantity;
    setQuantity(newQuantity);
    setPrice(newPrice);
  }

  const DecQuantity = () => {
    if(quantity > 1){
      const newQuantity = quantity - 1;
      const newPrice = product.price * newQuantity;
      setQuantity(newQuantity);
      setPrice(newPrice);
    }
  }

  return (
    <div className="bg-white p-4 border border-gray-300 shadow-md mb-4 rounded-lg mt-5">
      <div className="flex items-center">
        <img src={product.thumbnail} alt="{product.name}" className="w-16 h-16 object-cover rounded-lg" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">Price : {price}</p>
          <p className="text-gray-600">Quantity: {quantity}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="text-red-600 font-semibold" onClick={rmvProduct}>Remove</button>
        <div className="flex items-center">
          <button onClick={DecQuantity} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded">
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button onClick={IncQuantity} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
