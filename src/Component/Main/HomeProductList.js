import React from "react";
import "./HomeProductList.css";
import ProductItem from "./ProductItem";
import { Product } from "../../public/class";

const HomeProductList = (props) => {
  const dummyItemList = [
    new Product({
      productId: "p1",
      productName: "검정 스커트",
      productPrice: 22000,
      sellingPrice: 19800,
      deleveryFee: 3000,
    }),
    new Product({
      productId: "p2",
      productName: "검정 스커트",
      productPrice: 22000,
      sellingPrice: 19800,
      deleveryFee: 3000,
    }),
    new Product({
      productId: "p3",
      productName: "검정 스커트",
      productPrice: 22000,
      sellingPrice: 19800,
      deleveryFee: 3000,
    }),
  ];

  console.log(dummyItemList[0]);

  return (
    <div className="home-product-list-wrapper">
      <h3 className="list-title">실시간 인기 순위</h3>
      <ol className="home-product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ol>
    </div>
  );
};

export default HomeProductList;
