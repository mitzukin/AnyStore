import React from "react";
import { PrimaryButton } from './Buttons'


function CartLogo(props) {
  return (
    <div {...props}>
    <svg width="40px" height="40px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_35)"> <rect width="24" height="24" fill="white"></rect> <path d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998" stroke="#000000" strokeLinejoin="round"></path> <path d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="10" cy="20" r="1" stroke="#000000" strokeLinejoin="round"></circle> <circle cx="17.5" cy="20" r="1" stroke="#000000" strokeLinejoin="round"></circle> </g> <defs> <clipPath id="clip0_15_35"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
    </div>
  )
}


const Navigation = () => {

  const navItems = [
    {title: "Home", link: ""},
    {title: "Sneakers", link: ""},
    {title: "About us", link: ""},
    {title: "Contact", link: ""}
  ]

  return (
    <div className="nav-container w-full mx-auto border border-b-gray-300">
      <div className="flex justify-between max-w-7xl mx-auto py-6 font-inter">
  {/*Left Section */}  
        <div className="flex items-center justify-center gap-x-12">
        <div className="font-bold text-2xl">Reason Store</div>
          <div className="flex items-center justify-center gap-x-8">
            {navItems.map((index, i) => (
              <div className="text-base font-normal text-gray-900 cursor-pointer" key={i}>{index.title}</div>
            ))}
          </div>
        </div>
        {/*Right Section */}
        <div className="flex gap-x-6">
        <CartLogo />
        <PrimaryButton title="Sign in" to="/AnyStore/Login" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
