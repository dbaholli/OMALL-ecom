import React from "react";
import { productsData } from "./data";
import { BsCartPlusFill } from "react-icons/bs";
import "./styles/_featuredproducts-component.scss";
import { Link } from "react-router-dom";

const FeaturedProductsComponent = () => {
  return (
    <div className='featuredproduct-component'>
      <h1 className='header-text'>Shikoni produktet tona</h1>
      <div className='featured-products'>
        {productsData.map((pData, i) => {
          return (
            <Link className='product-card' key={i} to={`/produkti/${pData.id}`}>
              <div className='productimage-container'>
                <div
                  className='featuredproduct-image'
                  style={{ content: `url(${pData.image})` }}
                ></div>
              </div>
              <div className='featuredproduct-info'>
                <h3 className='paragraph-text'>{pData.title}</h3>
                <p className='price paragraph-text'>{pData.price}€</p>
              </div>
              <div className='addtocart-button'>
                <BsCartPlusFill />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProductsComponent;
