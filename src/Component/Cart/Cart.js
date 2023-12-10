import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/nav";

const Cart = () => {
  const isAsideActive = useSelector((state) => state.navControl.isAsideActive);
  const cartList = useSelector((state) => state.cartControl.cartList);
  const navDispatch = useDispatch();

  const deactiveHandler = () => {
    navDispatch(navActions.setAside());
  };

  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice +=
      Number(cartList[i].productPrice) * Number(cartList[i].amount) +
      Number(cartList[i].deleveryFee);
  }

  return (
    <>
      <aside
        className={isAsideActive ? "cart-wrapper" : "cart-wrapper deactive"}
      >
        <CartHeader deactiveHandler={deactiveHandler} />
        <ol className="cart-product-list">
          {cartList.length === 0 ? (
            <div className="empty-cart-notice">아이템이 없습니다</div>
          ) : (
            cartList.map((cartItem) => <CartItem cartItem={cartItem} />)
          )}
        </ol>
        <CartFooter totalPrice={totalPrice} />
      </aside>
      <div
        className={isAsideActive ? "aside-bg" : "aside-bg deactive"}
        onClick={deactiveHandler}
      ></div>
    </>
  );
};

export default Cart;
