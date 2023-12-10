import React from "react";
import "./ProductDetail.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

const ProductDetail = () => {
  const product = useSelector((state) => state.navControl.selectedProduct);

  const cartDispatch = useDispatch();

  const addCartHandler = () => {
    cartDispatch(cartAction.addCart(product));
  };

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-images">
        {product.productImg.map((img) => (
          <img src={img} alt="product" />
        ))}
      </div>
      <div className="product-detail-information-wrapper">
        <h2>{product.productName}</h2>
        <hr />
        <table className="product-detail-information-table">
          <tr>
            <th>가격</th>
            <th>{product.productPrice}</th>
          </tr>
          <tr>
            <th>판매가</th>
            <th>{product.sellingPrice}</th>
          </tr>
          <tr>
            <th>배송비</th>
            <th>{product.deleveryFee}</th>
          </tr>
          <tr>
            <th>사이즈</th>
            <th>
              <select name="size" id="product-size">
                {product.option.size.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </th>
          </tr>
          <tr>
            <th>색</th>
            <th>
              <select name="color" id="product-color">
                {product.option.color.map((color) => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </th>
          </tr>
        </table>

        <div className="product-detail-buttons">
          <button className="add-cart">장바구니에 추가하기</button>
          <button className="like-product" onClick={addCartHandler}>
            마음에 들어요
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
