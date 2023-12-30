import React, {useContext} from 'react';
import ProductCard from '../Components/ProductCard';
import { ShopContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';

const Products = () => {

  const { productItems } = useContext(ShopContext)
  const { productId } = useParams();
  const product = productItems.find((e) => e.id === Number(productId))

  return (
    <div className="w-full h-full flex justify-between max-w-7xl mx-auto font-inter flex-col pb-10">
      <div className="divide-y divide-gray-300">
        <h1 className='text-center text-6xl font-poppins font-extrabold my-8'>New Stocks</h1>
        <div className="py-8 flex items-center space-x-4 px-4">
          <div className="text-xl font-semibold font-poppins">Category</div>
        </div>
      </div>
      <ProductCard product={product} />
    </div>
  )
}

export default Products