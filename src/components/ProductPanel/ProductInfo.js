import React from "react";
import { connect } from "react-redux";
import { getProductName, getProductDescription, getProductImage } from "../../reducers/products";

const ProductInfo = (props) => {
    const { productName, productDescription, productImage } = props;

    if(!productName || !productDescription || !productImage) {
        return null;
    }


    return (
        <div className="product-info">
            <div>
                <img src={props.productImage} alt="product" className="product-info-image"/>
            </div>
            <div className="product-info-description">
                <h2 className="product-info-description-title">{props.productName}</h2>
                <p className="product-info-description-subtitle">{props.productDescription}</p>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    productName: getProductName(state),
    productDescription: getProductDescription(state),
    productImage: getProductImage(state)
})


export default connect(mapStateToProps)(ProductInfo);