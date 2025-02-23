import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/HomeSection/TopBar";
import Navbar from "./components/Navbar";
import Logo from "./components/HomeSection/Logo";
import Footer from "./components/HomeSection/Footer";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Logo />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
