import React from 'react'
import Shoes from '../assets/Shoes.png'
import { SecondaryButton } from './Buttons'

function TextOverlay(props) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-300 font-oswald text-[250px] select-none rotate-[30deg]" {...props}>
      Sneakers
    </div>
  )
}

const Hero = () => {
  return (
    <div className='bg-background w-full md:h-[80vh] bg-center bg-cover md:overflow-y-hidden'>
      <div className="flex-box w-full h-full relative font-inter">
        <div className="z-10 max-w-lg space-y-6">
        <div className="primary-text font-bold leading-none font-poppins">NIKE DEALS</div>
          <h1 className='paragraph font-semibold leading-tight font-inter'>Dunk low is one of the most iconic at Nike</h1>
          <SecondaryButton title="Browse Product"/>
        </div>
        <div className="">
          <img src={Shoes} className='md:w-[700px] absolute md:top-0 md:left-1/2 select-none' />
        </div>
      </div>    
    </div>
  )
}

export default Hero