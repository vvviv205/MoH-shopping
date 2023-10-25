import React from "react";
import { NavLink } from "react-router-dom";
import { usePost } from "../../App";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, setCart, total, setOrder } = usePost();

  Date.prototype.addDays = function (days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };
  var date = new Date();

  function handleBuy() {
    if (cart.length == 0) {
      alert("Please add products to cart first");
    } else {
      let order = {
        id: new Date().valueOf(),
        cart: cart.map((e) => e),
        orderDate: date.toLocaleDateString(),
        deliverDate: date.addDays(3),
      };
      setOrder((orders) => [...orders, order]);
      setCart([]);
      alert(
        `We passed your order to the store center , it will deliver to your home at ${order.deliverDate}`
      );
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between flex-wrap">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${total}</p>
          </div>
          <div className="flex justify-between flex-wrap">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${Math.floor((total * 5) / 100)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between flex-wrap">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {Math.floor(total + Math.floor((total * 5) / 100))}$
              </p>
            </div>
          </div>
          <button
            onClick={() => handleBuy()}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-white hover:bg-blue-600"
          >
            Order Now
          </button>
          <button className="mt-4 w-full rounded-md bg-lime-600 py-1.5 font-medium text-white hover:bg-lime-700">
            <NavLink to="/order">Check Order</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
