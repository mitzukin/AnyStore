import React from 'react'
import productItems from '../assets/Product_Item'
import { ProductButtonPrimary } from './Buttons'
import { ProductButtonSecondary } from './Buttons'
import { Link } from 'react-router-dom'

const ProductCard = () => {

  return (
    <div className='grid md:grid-cols-3 gap-4 font-script'>
      {productItems.map((index) => (
        <div className="col-span-1 border border-gray-300 rounded-xl" key={index.id}>
          <div className="bg-gray-200 rounded-t-xl">
            <Link to={`/AnyStore/products/${index.id}`}><img src={index.image} alt="Reason Store"/></Link>
          </div>
          <div className="px-4 py-6 space-y-4">
            <div className="font-semibold text-xl">{index.title}</div>
            <div className="text-green-500 text-lg font-normal">P{index.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard