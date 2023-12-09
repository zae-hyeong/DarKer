import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import Cart from "./Component/Cart/Cart";
import ProductDetail from "./Component/Product/ProductDetail";
import { CartItem } from "./public/class";
import { nav_index } from "./store/nav";
import { useSelector } from "react-redux";

function App() {
  const pageSelect = useSelector((state) => state.navControl.pageIdx);

  const [cartList, setCartList] = useState([]);

  const addCartHandler = (newProduct) => {
    const productIndex = cartList.findIndex(
      (element) => element.productId === newProduct.productId
    );
    if (productIndex === -1) {
      setCartList((prevCartList) => [
        new CartItem({
          productId: newProduct.productId,
          productName: newProduct.productName,
          productPrice: newProduct.productPrice,
          deleveryFee: newProduct.deleveryFee,
          productImg: newProduct.productImg,
          amount: 1,
        }),
        ...prevCartList,
      ]);
    } else {
      cartList[productIndex].amount += 1;
    }
  };

  return (
    <div className="App">
      <Header />

      {pageSelect === nav_index.MAIN_PAGE ? (
        <Main onAddCart={addCartHandler} />
      ) : pageSelect === nav_index.LOGIN_PAGE ? (
        <Login />
      ) : pageSelect === nav_index.SIGNUP_PAGE ? (
        <Signup />
      ) : (
        <ProductDetail onAddCart={addCartHandler} />
      )}

      <Cart cartList={cartList} />
      <Footer />
    </div>
  );
}

export default App;
