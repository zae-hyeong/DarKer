import React from "react";
import "./HomeProductList.css";
import ProductItem from "./ProductItem";

const HomeProductList = (props) => {

  return (
    <div className="home-product-list-wrapper">
      <h3 className="list-title">실시간 인기 순위</h3>
      <ol className="home-product-list">
        <ProductItem
          key={props.productList[0].productId}
          product={props.productList[0]}
        />
        <ProductItem
          key={props.productList[1].productId}
          product={props.productList[1]}
        />
        <ProductItem
          key={props.productList[2].productId}
          product={props.productList[2]}
        />
      </ol>
    </div>
  );
};

export default HomeProductList;
