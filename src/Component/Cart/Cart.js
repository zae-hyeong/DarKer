import React, { useState } from "react";
import "./Cart.css";
import exImg from "../../public/image/item-img-ex.jpg";

const Cart = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <aside className={isActive ? "cart-wrapper" : "cart-wrapper deactive"}>
        {/* Todo : add deactive button on top */}
        <ol>
          <li>
            <img className="cart-product-img" src={exImg} alt="product image" />
            
            <h3 className="cart-product-name">Product Title</h3>
            <div className="cart-product-details"></div>
            {/* todo : 총합 계산 등 */}
          </li>
        </ol>
      </aside>
      <div className={isActive ? "aside-bg" : "aside-bg deactive"}></div>
    </>
  );
};

export default Cart;
