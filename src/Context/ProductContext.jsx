import React, { createContext, useState } from "react";
import productItems from '../assets/Product_Item' // All Product
import couponCodes from "../assets/CouponCodes";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {}
  for (let index = 0; index < productItems.length+1; index++) {
     cart[index] = 0;
  }
  return cart
}

const getDiscount = () => {
  let coupon = {}
  for (let index = 0; index < couponCodes.length+1; index++) {
     coupon[index] = 0;
  }
  return coupon
}


const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getCart());

  const [discountCoupon,setDiscountCoupon] = useState(getDiscount())
  
  console.log(cartItems)

  const addToCart = (cartProductId) => {
    setCartItems((previousValue) => ({ ...previousValue, [cartProductId]:previousValue[cartProductId]+1}))
    console.log(cartItems)
  }

  const removeToCart = (cartProductId) => {
    setCartItems((previousValue) => ({ ...previousValue, [cartProductId]: previousValue[cartProductId] - 1 }))
  }

  const getTotalProduct = () => {
    let totalItem = 0;
    for (const item in cartItems)
    {
      if (cartItems[item] > 0)
      {
        totalItem += cartItems[item];
      }
    }
  
    return totalItem;
  };



  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productItems.find(product => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };



  
  const contextValue = {getTotalAmount, productItems, cartItems, addToCart, removeToCart,getTotalProduct }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

