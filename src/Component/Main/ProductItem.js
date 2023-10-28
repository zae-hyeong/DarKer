import React from 'react'
import productDemoImg from "../../public/image/item-img-ex.jpg";

const ProductItem = () => {
  const isDiscounted = true; //임시로 설정한 값

  return (
    <ol className="product-item">
    <img src={productDemoImg} alt="product image" />
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
  </ol>
  )
}

export default ProductItem