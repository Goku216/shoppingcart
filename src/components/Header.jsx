import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../public/logo.png";

export const Header = ({ cart, clicked, setClicked }) => {
  const bgValue = "bg-zinc-200";

  return (
    <header className="max-w-7xl text-lg m-auto h-17 py-2 px-4 flex items-center justify-between border-b-1 border-zinc-200">
      <Link to="/" className="flex items-center">
        <img className="w-10" src={Logo} alt="logo" />
        <span className="m-1">Shopping Cart</span>
      </Link>
      <nav>
        <NavLink
          to="/"
          onClick={() => setClicked("/")}
          className={
            clicked === "/"
              ? `text-xl m-2 p-2 rounded ${bgValue}`
              : "text-xl m-2 p-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          onClick={() => setClicked("/cart")}
          className={
            clicked === "/cart"
              ? `text-xl m-2 p-2 rounded ${bgValue}`
              : "text-xl m-2 p-2"
          }
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
