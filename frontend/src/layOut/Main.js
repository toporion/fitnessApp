// Main.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";
import Banner from "../components/Banner";

const Main = () => {
  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Navbar */}
      <MainMenu />

  

      {/* Rest of the page */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
