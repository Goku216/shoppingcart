import React from "react";
import { useTitle } from "../hooks/useTitle";
import { CartItem } from "../components/CartItem";

export const Cart = ({ cart, setCart, title }) => {
  useTitle(title);
  return (
    <main className="m-auto max-w-7xl max-h-screen p-3">
      <section className="m-8">
        <h1 className="text-center font-bold text-3xl">
          Cart Items: {cart.length}
        </h1>
        <CartItem cart={cart} setCart={setCart} />
      </section>
    </main>
  );
};
