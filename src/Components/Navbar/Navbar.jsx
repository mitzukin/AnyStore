import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="p-4 bg-white ">
        <ul className="flex gap-2 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
