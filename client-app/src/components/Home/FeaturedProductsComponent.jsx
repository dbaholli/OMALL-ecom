import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../actions/productActions";
import Product from "../shared/ProductComponent/Product";
import "./styles/_featuredproducts-component.scss";

const FeaturedProductsComponent = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(3);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  useEffect(() => {
    dispatch(listProducts(offset, limit));
  }, [dispatch, offset, limit]);

  return (
    <div className='featuredproduct-component'>
      <h1 className='header-text'>Shikoni produktet tona</h1>
      <div className='featured-products'>
        {loading ? (
          <p className='header-text loadertext'>Loading...</p>
        ) : error ? (
          <p className='header-text loadertext'>
            Kemi hasur ne probleme teknike, ju lutem kthehuni me vone!
          </p>
        ) : (
          <>
            {products?.items?.map((product, i) => {
              return <Product product={product} key={i} />;
            })}
            <Link
              onClick={handleLoadMore}
              className='shared-button more-button'
            >
              Me shume
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProductsComponent;
