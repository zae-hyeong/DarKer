import React from "react";
import "./ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartAction } from "../../store/cart";
import { Product } from "../../public/class";

import b0img1 from "../../public/image/productExample1/peb0.jpg";
import b1img1 from "../../public/image/productExample1/peb1.jpg";
import b2img1 from "../../public/image/productExample1/peb2.jpg";
import w0img1 from "../../public/image/productExample1/pew0.jpg";
import w1img1 from "../../public/image/productExample1/pew1.jpg";
import w2img1 from "../../public/image/productExample1/pew2.jpg";
import bw0img1 from "../../public/image/productExample1/pebw0.jpg";

import b0img2 from "../../public/image/productExample2/peb0.jpg";
import b1img2 from "../../public/image/productExample2/peb1.jpg";
import b2img2 from "../../public/image/productExample2/peb2.jpg";
import w0img2 from "../../public/image/productExample2/pew0.jpg";
import w1img2 from "../../public/image/productExample2/pew1.jpg";
import w2img2 from "../../public/image/productExample2/pew2.jpg";

import b0img3 from "../../public/image/productExample3/peb0.jpg";
import b1img3 from "../../public/image/productExample3/peb1.jpg";
import b2img3 from "../../public/image/productExample3/peb2.jpg";

const dummyProductList = [
  new Product({
    productId: "asdf1",
    productImg: [b0img1, b1img1, b2img1, w0img1, w1img1, w2img1, bw0img1],
    productName: "레이어드 원피스",
    productPrice: 48000,
    sellingPrice: 32000,
    deleveryFee: 3000,
    option: {
      size: ["XL", "L", "M", "S", "XS"],
      color: ["black", "white"],
    },
  }),
  new Product({
    productId: "asdf2",
    productImg: [b0img2, b1img2, b2img2, w0img2, w1img2, w2img2],
    productName: "모던 스탠다드 폴라티",
    productPrice: 32000,
    sellingPrice: 20000,
    deleveryFee: 5000,
    option: {
      size: ["L", "M", "S", "XS"],
      color: ["black", "white"],
    },
  }),
  new Product({
    productId: "asdf3",
    productImg: [b0img3, b1img3, b2img3],
    productName: "오버 사이즈 후리스",
    productPrice: 122000,
    sellingPrice: 118000,
    deleveryFee: 0,
    option: {
      size: ["XL", "L", "M", "S"],
      color: ["black"],
    },
  }),
];

const ProductDetail = () => {
  
  const cartDispatch = useDispatch();

  const addCartHandler = () => {
    cartDispatch(cartAction.addCart(product));
  };

  const productIdInfo = useParams();
  console.log(productIdInfo);

  const productIndex = dummyProductList.findIndex(
    (element) => element.productId === productIdInfo.productId
  );

  const product = dummyProductList[productIndex];

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
          <thead></thead>
          <tbody>
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
          </tbody>
        </table>

        <div className="product-detail-buttons">
          <button className="add-cart" onClick={addCartHandler}>
            장바구니에 추가하기
          </button>
          <button className="like-product">마음에 들어요</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
