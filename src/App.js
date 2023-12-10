import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import Cart from "./Component/Cart/Cart";
import ProductDetail from "./Component/Product/ProductDetail";
import { nav_index } from "./store/nav";
import { useSelector } from "react-redux";

function App() {
  const pageSelect = useSelector((state) => state.navControl.pageIdx);

  return (
    <div className="App">
      <Header />

      {pageSelect === nav_index.MAIN_PAGE ? (
        <Main />
      ) : pageSelect === nav_index.LOGIN_PAGE ? (
        <Login />
      ) : pageSelect === nav_index.SIGNUP_PAGE ? (
        <Signup />
      ) : (
        <ProductDetail />
      )}

      <Cart />
      <Footer />
    </div>
  );
}

export default App;
