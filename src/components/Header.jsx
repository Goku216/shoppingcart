import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";

export const Header = ({ cart }) => {
  return (
    <header className="max-w-7xl text-lg m-auto h-17 py-2 px-4 flex items-center justify-between border-b-1 border-zinc-200">
      <Link to="/" className="flex items-center">
        <img className="w-10" src={Logo} alt="logo" />
        <span className="m-1">Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink
          to="/"
          className="link text-xl m-2 p-2 rounded text-xl m-2 p-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className="link text-xl m-2 p-2 rounded text-xl m-2 p-2"
        >
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="font-medium">
        Cart: {cart.length}
      </Link>
    </header>
  );
};
