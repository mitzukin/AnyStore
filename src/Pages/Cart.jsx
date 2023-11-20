import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ProductContext'


const Cart = () => {

  const { productItems, cartItems, removeToCart } = useContext(ShopContext)

  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      const message = 'Are you sure you want to leave this page?';
      event.returnValue = message;
      return message;
    });
  }, []);

  return (
    <div className="w-full h-full flex justify-between max-w-7xl mx-auto font-inter flex-col pb-10">
      <h1 className='text-center text-4xl font-poppins font-extrabold my-8'>My Cart</h1>
      <div className="flex items-center space-x-4">
        <div className="flex justify-between w-full pr-8">
        </div>
      </div>
      <div className="divide-y divide-gray-200 border-t border-t-gray-200 border-b">
        {productItems.map((e) => {
          if (cartItems[e.id] > 0) {
            return <div className="py-2 pr-8 flex items-center justify-between" key={e.id}>
              <img src={e.image} className='md:w-[200px]' />
              <div className="font-semibold text-xl mt-2">{e.title}</div>
              <input type="text" placeholder='Quantity' />
              <div className="">P{e.price}</div>
            </div>
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Cart
