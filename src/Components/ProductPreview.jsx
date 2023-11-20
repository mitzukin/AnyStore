import { useContext } from "react"
import React from 'react'
import { useParams } from "react-router-dom"
import { ShopContext } from '../Context/ProductContext';



const ProductPreview = () => {

  const { productItems,addToCart } = useContext(ShopContext)
  const { productId } = useParams();
  const product = productItems.find((e) => e.id === Number(productId))

  
  
  return (
    <div>
      <div className="" key={product.id}>
        <img src={product.image} alt="ProductImage" />
        <button className=" p-5 bg-red-200" onClick={() => {
          addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPreview