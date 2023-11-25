import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

const Cart = (props) => {

  const deactiveHandler = () => {
    props.onAsideActive(false);
  }
  return (
    <>
      <aside
        className={props.isAsideActive ? "cart-wrapper" : "cart-wrapper deactive"}
      >
        <CartHeader deactiveHandler={deactiveHandler}/>
        <ol className="cart-product-list">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ol>
        <CartFooter />
      </aside>
      <div className={props.isAsideActive ? "aside-bg" : "aside-bg deactive"} onClick={deactiveHandler}></div>
    </>
  );
};

export default Cart;
