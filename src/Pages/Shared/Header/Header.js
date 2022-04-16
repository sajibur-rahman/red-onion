import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../../assets/images/logo2.png";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between h-5 px-10 py-10">
        <div>
          <NavLink to="/">
            <img className="w-32" src={brandLogo} alt="brandlogo" />
          </NavLink>
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <li className="mr-4">
              <NavLink to="/cart">cart</NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="mr-4 px-10 py-2 bg-red-700 text-white rounded-full">
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
