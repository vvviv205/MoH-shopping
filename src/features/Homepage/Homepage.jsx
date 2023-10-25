import React from "react";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <center className="mt-[22vh] sm:mt-[18vh]">
      <h5 className="text-base sm:text-lg">Find your best fashion in</h5>
      <h1 className="text-5xl break-words font-medium sm:text-6xl">
        MoH Shop Simulator
      </h1>
      <h4 className="mt-2 sm:text-base">
        You can try this app which bring data from fake api
      </h4>
      <button
        className="bg-slate-900 text-white p-4 text-base outline-none hover:bg-slate-50 hover:text-slate-900 hover:text-lg transition-all duration-300 rounded-full mt-2 sm:mt-4 sm:text-xl sm:p-5 sm:hover:text-2xl"
        onClick={() => navigate("/menu")}
      >
        Shop Now !
      </button>
    </center>
  );
}
