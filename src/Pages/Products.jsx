import React, {useContext} from 'react';
import ProductCard from '../Components/ProductCard';
import { ShopContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';

const Products = () => {

  const { productItems } = useContext(ShopContext)
  const { productId } = useParams();
  const product = productItems.find((e) => e.id === Number(productId))

  return (
    <div className="flex flex-col justify-between w-full h-full pb-10 mx-auto max-w-7xl font-inter">
      <div className="divide-y divide-gray-300">
        <h1 className='my-8 text-6xl font-extrabold text-center font-poppins'>New Stocks</h1>
        <div className="flex items-center px-4 py-8 space-x-4">
          <div className="text-xl font-semibold font-poppins">Category</div>
        </div>
      </div>
      <ProductCard product={product} />
    </div>
  )
}

export default Products