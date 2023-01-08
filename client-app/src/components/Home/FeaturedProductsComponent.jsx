import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "./data";
import { BsCartPlusFill } from "react-icons/bs";
import "./styles/_featuredproducts-component.scss";
import { Link } from "react-router-dom";
import { listProducts } from "../../actions/productActions";

const FeaturedProductsComponent = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className='featuredproduct-component'>
      <h1 className='header-text'>Shikoni produktet tona</h1>
      <div className='featured-products'>
        {loading ? (
          <p className='header-text'>Loading products...</p>
        ) : error ? (
          <p className='header-text'>{error}</p>
        ) : (
          <>
            {products.map((pData, i) => {
              return (
                <Link
                  className='product-card'
                  key={i}
                  to={`/produkti/${pData.slug}`}
                >
                  <div className='productimage-container'>
                    <div
                      className='featuredproduct-image'
                      style={{ content: `url(${pData.image})` }}
                    ></div>
                  </div>
                  <div className='featuredproduct-info'>
                    <h3 className='paragraph-text'>{pData.title}</h3>
                    <p className='paragraph-text'>{pData.description}</p>
                    <p className='price paragraph-text'>{pData.price}€</p>
                    <p className='paragraph-text'>Vlersimet: {pData.rating}</p>
                  </div>
                  <div className='addtocart-button'>
                    <BsCartPlusFill />
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductsComponent;
