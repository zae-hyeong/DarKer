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

function App() {
  const [pageSelect, setPageSelect] = useState(1);
  const [isAsideActive, setIsAsideActive] = useState(false);
  const [product, setProduct] = useState(null);

  const [cartList, setCartList] = useState([]);

  const asideActiveHandler = (isActive) => {
    setIsAsideActive(isActive);
  };

  const navSelectHandler = (navNum) => {
    setPageSelect(Number(navNum));
  };

  const productSelectHandler = (productData) => {
    console.log(productData);
    setProduct(productData);
  };

  const addCartHandler = (newProduct) => {
    const productIndex = cartList.findIndex(
      (element) => element.productId === newProduct.productId
    );
    console.log(JSON.stringify(productIndex));
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
      <Header
        onNavSelect={navSelectHandler}
        onAsideActive={asideActiveHandler}
      />

      {pageSelect === 1 ? (
        <Main
          onNavSelect={navSelectHandler}
          onSelectProduct={productSelectHandler}
        />
      ) : pageSelect === 2 ? (
        <Login />
      ) : pageSelect === 3 ? (
        <Signup />
      ) : (
        <ProductDetail selectedProduct={product} onAddCart={addCartHandler} />
      )}
      <Cart
        cartList={cartList}
        isAsideActive={isAsideActive}
        onAsideActive={asideActiveHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
