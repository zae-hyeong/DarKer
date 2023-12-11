import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Cart from "../Component/Cart/Cart";
import Footer from "../Component/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </>
  );
};

export default RootLayout;
