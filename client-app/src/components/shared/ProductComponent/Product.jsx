import React from "react";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";

const Product = (product, i) => {
    // use the props from the featured product component to display product data
  return (
    <>
      <Link className='product-card' key={i} to={`/produkti/${product.product.slug}`}>
        <div className='productimage-container'>
          <div
            className='featuredproduct-image'
            style={{ content: `url(${product.product.image})` }}
          ></div>
        </div>
        <div className='featuredproduct-info'>
          <h3 className='paragraph-text'>{product.product.title}</h3>
          <p className='price paragraph-text'>{product.product.price}€</p>
          <p className='paragraph-text'>Vlersimet: {product.product.rating}</p>
        </div>
        <div className='addtocart-button'>
          <BsCartPlusFill />
        </div>
      </Link>
    </>
  );
};

export default Product;
