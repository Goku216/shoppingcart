import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

export const AllRoutes = ({ cart, setCart }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home cart={cart} setCart={setCart} title="Home" />}
      />
      <Route
        path="/cart"
        element={<Cart cart={cart} setCart={setCart} title="Cart" />}
      />
    </Routes>
  );
};
