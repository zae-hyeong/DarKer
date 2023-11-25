import React from "react";
import "./CartItem.css";
import xButtom from "../../public/svg/x-symbol.svg";
import exImg from "../../public/image/item-img-ex.jpg";

const CartItem = () => {
  return (
    <li className="cart-product-item">
      <img className="cart-product-img" src={exImg} alt="product image" />

      <div className="cart-product-details">
        <h3 className="cart-product-name">Product Title</h3>
      </div>
      <img className="cart-delete-product" src={xButtom} alt="close aside" />
    </li>
  );
};

export default CartItem;
