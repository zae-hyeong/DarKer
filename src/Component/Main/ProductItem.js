import React from "react";
import "./ProductItem.css";
import cartIcon from "../../public/svg/cart-icon.svg";

const ProductItem = (props) => {
  const isDiscounted = true; //임시로 설정한 값

  const product = props.product;

  const productItemClickHandler = () => {
    props.onNavSelect(4);
    props.onSelectProduct(product);
  };

  return (
    <li
      className="product-item"
      onClick={productItemClickHandler}
    >
      <img src={product.productImg[0]} alt="product main image" />
      <div className="product-info-wrapper">
        <div className="product-info">
          <h4>{product.productName}</h4>
          <hr />
          <div className="product-price-info">
            {isDiscounted && (
              <span className="product-origin-price">
                {product.productPrice}
              </span>
            )}
            <span className="product-discounted-price">
              {product.sellingPrice}
            </span>
          </div>
        </div>
        <button className="add-cart-btn">
          <img className="add-cart-icon" src={cartIcon} alt="add on cart" />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
