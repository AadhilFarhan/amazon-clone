import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__rise">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
