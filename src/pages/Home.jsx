import React from "react";
import { Card } from "../components/Card";
import { useTitle } from "../hooks/useTitle";

export const Home = ({ cart, setCart, title }) => {
  useTitle(title);
  return (
    <main>
      <Card cart={cart} setCart={setCart} />
    </main>
  );
};
