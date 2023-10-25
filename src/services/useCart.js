import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("Cart");
    if (stored == [] || stored === null) {
      return [];
    } else {
      return JSON.parse(stored);
    }
  });

  useEffect(
    function () {
      localStorage.setItem("Cart", JSON.stringify(cart));
    },
    [cart]
  );

  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totprice = 0;
    if (cart.length === 0) {
      totprice = 0;
    }
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      totprice += element.price;
    }
    setTotal(totprice);
  }, [cart]);

  return { cart, setCart, total };
}
