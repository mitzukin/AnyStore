import React, { useContext, useEffect, useState } from 'react';
import { PrimaryButton } from './Buttons';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ProductContext';
import { RxHamburgerMenu } from "react-icons/rx";


function CartLogo(props) {
  return (
    <Link to="/AnyStore/cart" {...props}>
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_35)"> <rect width="24" height="24" fill="white"></rect> <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#000000" strokeLinejoin="round"></path> <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="10" cy="20" r="1" stroke="#000000" strokeLinejoin="round"></circle> <circle cx="17.5" cy="20" r="1" stroke="#000000" strokeLinejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_35"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
    </Link>
  )
}

function LogoSection(props) {
  return (
    <Link to="/AnyStore" {...props}>
      <div className="font-bold md:text-2xl xs:text-xl">Reason Store</div>
    </Link>
  )
}


const Navigation = () => {


  const navItems = [
    { title: "Home", to: "/AnyStore/" },
    { title: "Products", to: "/AnyStore/products" },
    { title: "About us", to: "/AnyStore/about" },
    { title: "Contact", to: "/AnyStore/contact" }
  ]

  const [menu, setMenu] = useState([...navItems]);

  const { getTotalProduct } = useContext(ShopContext)

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className="w-full border border-b-gray-300 md:px-0 xs:px-2 relative">
      <div className="flex justify-between max-w-7xl mx-auto py-6 font-inter">
        {/*Left Section */}
        <div className="flex items-center justify-center gap-x-12">
          <LogoSection />
          <div className="md:flex items-center justify-center gap-x-8 hidden">
            {navItems.map((index, i) => (
              <Link onClick={() => { setMenu(index.title) }} className="relative text-base font-normal text-gray-800 cursor-pointer" key={i} to={index.to}>{index.title}{menu == index.title ? <div className='border border-gray-800 absolute w-full -bottom-[39px]'></div> : <div></div>}</Link>
            ))}
          </div>
        </div>
        {/*Right Section */}
        <div className="flex items-center md:gap-x-6 xs:space-x-3 relative">
          <div className="relative flex justify-center items-center">
            <CartLogo />
            <div className="bg-black rounded-full text-white w-6 h-6 py-1 text-xs text-center absolute pointer-events-none -right-2 -top-2">
              {getTotalProduct()}
            </div>
          </div>
          <PrimaryButton title="Sign in" to="/AnyStore/login" />
          <RxHamburgerMenu className='text-3xl block md:hidden z-10 focus:text-white' onClick={handleClick} />
        </div>
        {isOpen && (
          <div className="absolute top-0 right-0 bg-black w-full h-screen">
            sada
          </div>
        )}
      </div>
    </div>

  );
};

export default Navigation;
