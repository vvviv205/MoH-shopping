import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav
        class="px-5 sm:px-10 max-w-[85rem] w-full flex items-center justify-between"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex-none text-2xl font-semibold dark:text-white"
          >
            MoH
          </NavLink>
        </div>
        <div className=" flex gap-2 sm:gap-4 items-end">
          <NavLink
            to="/menu"
            className="text-lg font-medium text-gray-300 hover:text-gray-400"
            aria-current="page"
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className="text-lg font-medium text-gray-300 hover:text-gray-400"
            aria-current="page"
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </>
  );
}
