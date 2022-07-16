import React from "react";
import { connect } from "react-redux";
import { getProductTags } from "../../reducers/products";

const ProductTags = (props) => {
  const { productTags } = props;

  if (!productTags) {
    return null;
  }

  return (
    <div className="product-tags">
      {productTags.map((tag) => (
        <div key={tag} className="product-tag">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productTags: getProductTags(state),
});

export default connect(mapStateToProps)(ProductTags);
