import React, { useState, useContext } from 'react'
import CartProductView from '../ProductCards/CartProductView';
import ProductContext from '../../context/productContext';

export function Cart(){



  const {productOfCart} = useContext(ProductContext);

  // const plusToCart = (product) => {
  //   setCart(productOfCart);;
  // }

  // console.log(cart);



  return (
    <>

      {
        productOfCart.map((product)=>(
            <CartProductView product={product} />
        ))
      }

      </>
  )
}

export default Cart;