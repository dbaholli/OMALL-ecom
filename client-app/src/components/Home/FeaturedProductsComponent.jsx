import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/_featuredproducts-component.scss";
import { listProducts } from "../../actions/productActions";
import Product from "../shared/ProductComponent/Product";

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
            {products.map((product, i) => {
              return <Product product={product} index={i} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductsComponent;
