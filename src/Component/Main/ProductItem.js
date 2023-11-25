import React from "react";
import "./ProductItem.css";
import productDemoImg from "../../public/image/item-img-ex.jpg";
import cartIcon from '../../public/svg/cart-icon.svg'

const ProductItem = () => {
  const isDiscounted = true; //임시로 설정한 값

  return (
    <li className="product-item">
      <img src={productDemoImg} alt="product image" />
      <div className="product-info-wrapper">
        <div className="product-info">
          <h4>모던 블랙 목 티셔츠</h4>
          <hr />
          <div className="product-price-info">
            {isDiscounted ? (
              <span className="product-origin-price">29000</span>
            ) : (
              <></>
            )}
            <span className="product-discounted-price">19000</span>
          </div>
        </div>
        <img className='add-cart-btn' src={cartIcon} alt="add on cart" />
      </div>
      
    </li>
  );
};

export default ProductItem;
