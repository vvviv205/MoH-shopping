import React, { useState } from "react";
import { usePost } from "../../App";

export default function Card({ product }) {
  const { setCart } = usePost();
  const { title, price, image, id } = product;
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    setCart((cart) => [
      ...cart,
      { title, id, price: price * quantity, quantity, image },
    ]);
    alert(`(${title}) added to the cart`);
  }
  return (
    <div class="relative my-8 flex h-[22rem] max-w-[12rem] sm:max-w-[14rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
      <div class="relative mx-3 mt-3 flex justify-center h-64 overflow-hidden rounded-xl">
        <img class="object-cover " src={image} alt="product image" />
      </div>
      <div class="mt-4 px-5 pb-5">
        <div>
          <h5 class="text-xl tracking-tight text-slate-900">{title}</h5>
        </div>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">${price}</span>
          </p>
          <div className="flex justify-center gap-1">
            <div className="quantity" onClick={() => setQuantity(quantity + 1)}>
              +
            </div>
            <div className="text-xl font-semibold">{quantity}</div>
            <div
              className="quantity"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              -
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleAdd()}
        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </div>
    </div>
  );
}
