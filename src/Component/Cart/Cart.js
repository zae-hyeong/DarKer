import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";

const Cart = (props) => {
  const deactiveHandler = () => {
    props.onAsideActive(false);
  };

  const cartList = props.cartList;

  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += Number(cartList[i].productPrice) * Number(cartList[i].amount) + Number(cartList[i].deleveryFee)
  }

  return (
    <>
      <aside
        className={
          props.isAsideActive ? "cart-wrapper" : "cart-wrapper deactive"
        }
      >
        <CartHeader deactiveHandler={deactiveHandler} />
        <ol className="cart-product-list">
          {cartList.length === 0 ? (
            <div>아이템이 없습니다</div>
          ) : (
            cartList.map((cartItem) => <CartItem cartItem={cartItem} />)
          )}
        </ol>
        <CartFooter totalPrice={totalPrice}/>
      </aside>
      <div
        className={props.isAsideActive ? "aside-bg" : "aside-bg deactive"}
        onClick={deactiveHandler}
      ></div>
    </>
  );
};

export default Cart;
