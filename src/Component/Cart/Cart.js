import React, { useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

const Cart = () => {
  const [isAsideActive, setIsAsideActive] = useState(true);

  return (
    <>
      <aside
        className={isAsideActive ? "cart-wrapper" : "cart-wrapper deactive"}
      >
        <CartHeader />
        {/* Todo : add deactive button on top */}
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
      <div className={isAsideActive ? "aside-bg" : "aside-bg deactive"}></div>
    </>
  );
};

export default Cart;
