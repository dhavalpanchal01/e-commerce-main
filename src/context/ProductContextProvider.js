import React, { useEffect, useState } from "react";
import ProductContext from "./productContext";

const ProductContextProvider = ({children}) => {

    const [productOfCart, setProductOfCart] = useState([]);



    // useEffect(()=>{
    //     console.log(productOfCart);
    // },[]);


   return(
    <ProductContext.Provider value={{productOfCart , setProductOfCart}}>
        {children}
    </ProductContext.Provider>
   )
}


export default ProductContextProvider;