import React from "react";
import "./ProductDetail.css";

import b0img from "../../public/image/productExample1/peb0.jpg";
import b1img from "../../public/image/productExample1/peb1.jpg";
import b2img from "../../public/image/productExample1/peb2.jpg";
import w0img from "../../public/image/productExample1/pew0.jpg";
import w1img from "../../public/image/productExample1/pew1.jpg";
import w2img from "../../public/image/productExample1/pew2.jpg";
import bw0img from "../../public/image/productExample1/pebw0.jpg";
import { Product } from "../../public/class";

const ProductDetail = () => {
  const dummyProduct = new Product({
    productId: "asdf1",
    productImg: [b0img, b1img, b2img, w0img, w1img, w2img, bw0img],
    productName: "레이어드 원피스",
    productPrice: 48000,
    sellingPrice: 32000,
    deleveryFee: 3000,
  });

  console.log(dummyProduct);

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-images">
        {dummyProduct.productImg.map((img) => (
          <img src={img} alt="product image" />
        ))}
      </div>
      <div className="product-detail-information-wrapper">
        <h2>{dummyProduct.productName}</h2>
        <hr />
        <table className="product-detail-information-table">
          <tr>
            <th>가격</th>
            <th>{dummyProduct.productPrice}</th>
          </tr>
          <tr>
            <th>판매가</th>
            <th>{dummyProduct.sellingPrice}</th>
          </tr>
          <tr>
            <th>배송비</th>
            <th>{dummyProduct.deleveryFee}</th>
          </tr>
          <tr>
            <th>사이즈</th>
            <th>
              <select name="size" id="product-size">
                {dummyProduct.option.size.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </th>
          </tr>
          <tr>
            <th>색</th>
            <th>
              <select name="color" id="product-color">
                {dummyProduct.option.color.map((color) => (
                  <option value={color}>{color}</option>
                ))}
              </select>
            </th>
          </tr>
        </table>

        <div className="product-detail-buttons">
          <button className="add-cart">장바구니에 추가하기</button>
          <button className="like-product">마음에 들어요</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
