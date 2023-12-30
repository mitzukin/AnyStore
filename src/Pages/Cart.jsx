import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ProductContext'
import { RiAddFill } from 'react-icons/ri'
import { GrFormSubtract } from "react-icons/gr";
import { CheckoutButton } from '../Components/Buttons'



const Cart = () => {

  const { productItems, cartItems, removeToCart, addToCart, getTotalAmount, getTotalProduct } = useContext(ShopContext)

  const subTotal = getTotalAmount()

  const totalProduct = getTotalProduct()

  const productHeader = ["Product", "Name", "Price", "Quantity", "Total"]


  return (
    <div className="w-full h-full flex justify-between max-w-7xl mx-auto font-inter flex-col pb-10">
      <h1 className='text-center text-4xl font-poppins font-extrabold my-8'>My Cart</h1>
      <div className="flex xs:flex-col md:flex-row space-x-8 xs:space-x-0 xs:px-4 md:px-0 xs:space-y-4 md:space-y-0">
        <div className="xs:w-full md:w-3/4">
          <div className="divide-y divide-gray-200 border-b-gray-200 border-b border-t">
            <div className="py-2 grid grid-cols-5 place-items-center font-semibold">
              {productHeader.map((index, i) => (
                <div key={i}>{index}</div>
              ))}
            </div>
            {productItems.map((e) => {
              if (cartItems[e.id] > 0) {
                return <div className="xs:py-8 md:py-3 grid grid-cols-5 place-items-center" key={e.id}>
                  <img src={e.image} className='md:w-max pr-2 xs:w-[200px]' />
                  <div className="font-semibold xs:text-sm md:text-base mt-2">{e.title}</div>
                  <div className="xs:text-sm md:text-base">&#8369;{e.price}</div>
                  <div className="flex items-center gap-3 border space-x-1 border-gray-300 xs:p-[2px] md:p-1">
                    <div className="text-base cursor-pointer" onClick={() => {
                      removeToCart(e.id)
                    }}><GrFormSubtract /></div>
                    <div className="xs:text-sm md:text-base font-semibold">{cartItems[e.id]}</div>
                    <div className="xs:text-sm md:text-base cursor-pointer" onClick={() => {
                      addToCart(e.id)
                    }}><RiAddFill /></div>
                  </div>
                  <div className="xs:text-sm md:text-base">&#8369;{e.price * cartItems[e.id]}</div>
                </div>
              }
              return null
            })}
          </div>
        </div>
        <div className='xs:w-full md:w-1/3'>
          <div className="flex flex-col bg-gray-200 text-white shadow-lg h-fit rounded-md">
            <div className="py-8 px-6 border-b border-b-gray-200 shadow-sm h-fit w-full">
              <div className="text-xl text-black font-poppins font-semibold">Order Summary</div>
            </div>
            <div className="py-6 pl-6 pr-16 space-y-1 border-b border-b-gray-300">
              <div className="flex justify-between items-center font-poppins text-black">
                <div className="text-lg">Total Items</div>
                <div className="font-medium text-lg">{totalProduct}</div>
              </div>
              <div className="flex justify-between items-center font-poppins text-black">
                <div className="text-lg">Subtotal</div>
                <div className="font-medium text-lg">&#8369;{subTotal}</div>
              </div>
              <div className="flex justify-between items-center font-poppins text-black">
                <div className="text-lg">Shipping Fee</div>
                <div className="font-medium text-lg">Free</div>
              </div>
              <div className="flex justify-between items-center font-poppins text-black">
                <div className="text-base font-medium text-green-400 cursor-pointer">Add Coupon Code</div>
                <div className="">&#8369;0</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg text-black font-poppins font-semibold py-4 pl-6 pr-16">
                <div className="">Total</div>
              <div className="">&#8369;{subTotal}</div>
            </div>
          </div>
          <div className="mt-2">
          <CheckoutButton title="Checkout"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
