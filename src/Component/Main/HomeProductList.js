import React from "react";
import "./HomeProductList.css";
import ProductItem from "./ProductItem";

const HomeProductList = (props) => {

  return (
    <div className="home-product-list-wrapper">
      <h3 className="list-title">실시간 인기 순위</h3>
      <li className="home-product-list">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </li>
    </div>
  );
};

export default HomeProductList;
