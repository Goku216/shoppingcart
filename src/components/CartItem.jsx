import React from "react";

export const CartItem = ({ cart, setCart }) => {
  if (!cart || cart.length === 0) {
    return null;
  }
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  return (
    <>
      {cart.map((item) => (
        <div
          key={item.id}
          className="items-center flex flex-wrap justify-between my-8 mx-3 p-3 border-1 border-zinc-200"
        >
          <img
            className="mr-3 h-28 w-37"
            src={`../../public/${item.id}.png`}
            alt=""
          />
          <p className="mr-3 w-81">{item.name}</p>
          <p className="mr-3 w-">${item.price}</p>
          <button
            onClick={() => removeFromCart(item)}
            className="bg-red-700 rounded-md text-white py-1 px-3 hover:bg-red-800"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};
