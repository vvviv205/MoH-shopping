import { useState, useEffect } from "react";

export function useOrder() {
  const [order, setOrder] = useState(() => {
    const stored = localStorage.getItem("order");
    if (stored == [] || stored === null) {
      return [];
    } else {
      return JSON.parse(stored);
    }
  });

  useEffect(
    function () {
      localStorage.setItem("order", JSON.stringify(order));
    },
    [order]
  );

  return { order, setOrder };
}
