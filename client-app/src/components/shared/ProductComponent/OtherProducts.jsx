import React from "react";
import { Link } from "react-router-dom";

const OtherProducts = (product, i) => {
  return (
    <Link
      className='product-card hvr-float'
      key={i}
      to={`/produkti/${product?.product?.meta?.slug}`}
    >
      <div className='product-badge paragraph-text'>
        {product?.product?.category?.title}
      </div>
      <div className='productimage-container'>
        <img
          className='featuredproduct-image'
          height='350px'
          src={`${import.meta.env.VITE_APP_API}${product?.product?.image[0]?.value?.image?.url}`}
        ></img>
      </div>
      <div className='featuredproduct-info'>
        <h3 className='paragraph-text'>{product?.product?.title}</h3>
        <p className='price paragraph-text'>{product?.product?.price}€</p>
        <p className='paragraph-text'>Sasia: {product?.product?.quantity}</p>
      </div>
    </Link>
  );
};

export default OtherProducts;
