import React from "react";
import { usePost } from "../../App";

export default function CartItem({ cartItem }) {
  const { title, id, quantity, price, image } = cartItem;
  const { setCart } = usePost();

  function handleDeleteItem() {
    setCart((cartItem) => cartItem.filter((cartItem) => cartItem.id !== id));
  }
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={image}
        alt="product-image"
        className="w-full h-25 rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">QTY : {quantity}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="mt-10 flex items-center space-x-4">
            <p className="text-sm">{price} $</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleDeleteItem()}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
