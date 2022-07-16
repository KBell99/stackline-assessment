import React from "react";
import ProductInfo from "./ProductInfo";
import ProductTags from "./ProductTags";
import './ProductPanel.css';

const ProductPanel = (props) => {
  return (
    <div className="product-panel">
      <ProductInfo />
      <ProductTags />
    </div>
  );
};

export default ProductPanel;
