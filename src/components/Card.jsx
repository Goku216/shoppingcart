import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Card = ({ cart, setCart }) => {
  const products = useFetch("http://localhost:3000/products");

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if prevCart is an array before proceeding
      if (Array.isArray(prevCart)) {
        const isAlreadyInCart = prevCart.some((item) => item.id === product.id);

        if (!isAlreadyInCart) {
          return [...prevCart, product];
        } else {
          return prevCart;
        }
      } else {
        // If prevCart is not an array, initialize it as an array
        return [product];
      }
    });
  };

  return (
    <main className="max-w-7xl m-auto max-h-screen p-3">
      <section className="flex flex-wrap justify-around my-8 mx-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-96  flex flex-col justify-center  border-1 border-zinc-200 rounded-md m-3 p-3 px-2"
          >
            <div className="w-fit">
              <img src={`../../public/${product.id}.png`} alt="" />
            </div>
            <div className="mt-5">
              <p className="text-lg font-medium">{product.name}</p>
              <p className="flex flex-wrap justify-between items-center mt-2">
                <span className="text-lg font-medium">${product.price}</span>
                <span
                  onClick={() => addToCart(product)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-md text-md p-2 m-1 cursor-pointer"
                >
                  Add To Cart
                </span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
