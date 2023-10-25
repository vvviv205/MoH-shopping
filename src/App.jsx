import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Homepage from "./features/Homepage/Homepage";
import Menu, { loader as menuloader } from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import Order from "./features/Order/Order";
import { createContext, useContext } from "react";
import { useCart } from "./services/useCart.js";
import { useOrder } from "./services/useOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Menu",
        element: <Menu />,
        loader: menuloader,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
    ],
  },
]);

const POST = createContext();

export function usePost() {
  return useContext(POST);
}

export default function App() {
  const { cart, setCart, total } = useCart();
  const { order, setOrder } = useOrder();
  return (
    <POST.Provider value={{ cart, setCart, total, order, setOrder }}>
      <RouterProvider router={router} />
    </POST.Provider>
  );
}
