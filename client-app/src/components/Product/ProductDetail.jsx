import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProductDetails } from "../../actions/productActions";
import "./styles/_productdetail.scss";

const ProductDetail = () => {
  // const product = productsData.find((p) => p.id == productParam.id);
  let productParam = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productParam.slug));
  }, [dispatch]);

  return (
    <div className='product-detail-component'>
      <div className='product-detail-container'>
        {loading ? (
          <h1 className='header-text'>Loading ...</h1>
        ) : (
          <>
            <div className='productimage-container'>
              {product?.image?.map((productImg, i) => {
                return (
                  <img
                    src={`http://127.0.0.1:8000/${productImg.value?.image?.url}`}
                    alt='Othman Home'
                    className='product-image'
                    key={i}
                  />
                );
              })}
            </div>
            <div className='product-info'>
              <h1 className='product-title header-text'>{product?.title}</h1>
              <p
                className={`product-price paragraph-text ${
                  product.price_with_sale != "" ? "active-sale" : ""
                }`}
              >
                <span>Cmimi:</span> {product?.price}€
              </p>
              <p className='product-price paragraph-text'>
                {product?.price_with_sale != "" ? (
                  <>
                    <span>Cmimi me zbritje: </span>
                    <span className='sale-price'>
                      {product.price_with_sale}€
                    </span>
                  </>
                ) : null}
              </p>
              <p className='product-quantity paragraph-text'>
                Kategoria: {product?.category?.title}
              </p>
              <h2 className='product-desc paragraph-text'>
                {product?.description}
              </h2>
              <h2 className='product-desc paragraph-text'>
                {product?.shipping ? (
                  <span>Transporti eshte falas</span>
                ) : (
                  <span>Nuk ka transport</span>
                )}
              </h2>
              <p className='product-quantity paragraph-text'>
                Sasia: <span>{product?.quanitity}</span>
              </p>

              <Link className='shared-button pay-btn'>Shto ne shporte</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
