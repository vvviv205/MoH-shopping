import React from "react";
import Nav from "./Nav";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

export default function AppLayout() {
  const isLoading = useNavigation().state == "loading";
  return (
    <div className="min-h-screen font-san bg-gray-100">
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800">
        <Nav />
      </header>
      <main>{isLoading ? <Loading /> : <Outlet />}</main>
    </div>
  );
}
