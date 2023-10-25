import React, { useState } from "react";
import { getMenu } from "../../services/apiFetching.js";
import { useLoaderData } from "react-router-dom";
import Card from "./Card.jsx";

export default function Menu() {
  const [sortBy, setSortBy] = useState("Name");
  const [category, setCategory] = useState("all");
  const menu = useLoaderData();

  let categories;
  if (category === "all") categories = menu;
  else categories = menu.filter((a) => a.category === category);

  let sorted;
  if (sortBy === "New-to-old") sorted = categories.sort((a, b) => b.id - a.id);
  if (sortBy === "Name") {
    sorted = categories.slice().sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortBy === "Price-inc")
    sorted = categories.sort((a, b) => b.price - a.price);
  if (sortBy === "Price-dec")
    sorted = categories.sort((a, b) => a.price - b.price);
  return (
    <div>
      <center className="mt-9 font-medium">
        <h1 className="text-3xl">Shopping page</h1>
        <h3 className="text-base border-b-2 mt-2 pb-4">
          browse and explore the products and get the thing that you need
        </h3>
      </center>
      <div className="flex gap-3 flex-wrap justify-center items-center mt-8">
        <button onClick={() => setCategory("all")} className="categories">
          All
        </button>
        <button
          onClick={() => setCategory("men's clothing")}
          className="categories"
        >
          Men
        </button>
        <button
          onClick={() => setCategory("women's clothing")}
          className="categories"
        >
          Women
        </button>
        <button onClick={() => setCategory("jewelery")} className="categories">
          Jewelery
        </button>
        <button
          onClick={() => setCategory("electronics")}
          className="categories"
        >
          Electronics
        </button>
      </div>
      <br />
      <div>
        <label className="pl-3">Sort by : </label>
        <select
          className="appearance-none bg-neutral-50 pl-3"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="New-to-old">Newest</option>
          <option value="Name">Name (A-Z)</option>
          <option value="Price-inc">Price (High to Low)</option>
          <option value="Price-dec">Price (Low to High)</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
        {sorted.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export async function loader() {
  return await getMenu();
}
