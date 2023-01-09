import React from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/_productdetail.scss";

const ProductDetail = () => {
  let productParam = useParams();
  // const product = productsData.find((p) => p.id == productParam.id);

  console.log(productParam);

  return (
    <div className='product-detail-component'>
      {/* WIP NEXT ISSUE */}
      {/* <div className='product-detail-container'>
        <div className='productimage-container'>
          <div
            className='product-image'
            style={{ content: `url(${product.image})` }}
          ></div>
        </div>
        <div className='product-info'>
          <h1 className='product-title header-text'>{product.title}</h1>
          <p className='product-price paragraph-text'>
            <span>Cmimi:</span> {product.price}€
          </p>
          <p className='product-quantity paragraph-text'>
            <span>Gjendja:</span> {product.quantity}
          </p>
          <h2 className='product-desc paragraph-text'>{product.description}</h2>
          <Link className='shared-button pay-btn'>Paguaj</Link>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetail;
