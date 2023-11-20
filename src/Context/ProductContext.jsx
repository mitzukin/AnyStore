import React, { createContext, useState } from "react";
import productItems from '../assets/Product_Item' // All Product

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {}
  for (let index = 0; index < productItems.length+1; index++) {
     cart[index] = 0;
  }

  return cart
}


const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getCart());
  
  console.log(cartItems)

  const addToCart = (cartProductId) => {
    setCartItems((previousValue) => ({ ...previousValue, [cartProductId]:previousValue[cartProductId]+1}))
    console.log(cartItems)
  }

  const removeToCart = (cartProductId) => {
    setCartItems((previousValue) => ({...previousValue,[cartProductId]:previousValue[cartProductId]-1}))
  }
  
  const contextValue = { productItems, cartItems, addToCart, removeToCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

