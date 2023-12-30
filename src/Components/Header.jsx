import React from 'react'
import {FaFacebookF,FaInstagram} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="w-full h-full bg-[#111111] py-3 md:p-0 xs:p-2">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div className="font-inter">Status: <span className='text-[#5cb85c]'>open</span></div>
        <div className="flex-box gap-4">
          <p>Follow us</p>
          <div className="inline-flex space-x-2">
            <FaFacebookF className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header