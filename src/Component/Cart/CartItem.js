import React from "react";
import "./CartItem.css";
import xButtom from "../../public/svg/x-symbol.svg";

const CartItem = (props) => {

  const cartItem = props.cartItem;

  return (
    <li className="cart-product-item">
      <img className="cart-product-img" src={cartItem.productImg[0]} alt="product" />

      <div className="cart-product-details">
        <h3 className="cart-product-name">{cartItem.productName}</h3>
        <div className="cart-product-price">가격 : {cartItem.productPrice}원</div>
        <div className="cart-product-delevery-fee">배송비 : {cartItem.deleveryFee}원</div>
        <div className="cart-product-amount">수량 : {cartItem.amount}개</div>
        <div className="cart-product-total-price">총 가격 : {Number(cartItem.amount) * Number(cartItem.productPrice) + Number(cartItem.deleveryFee)}원</div>
      </div>
      <img className="cart-delete-product" src={xButtom} alt="close aside" />
    </li>
  );
};

export default CartItem;
