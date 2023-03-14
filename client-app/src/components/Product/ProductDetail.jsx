import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import cogoToast from "cogo-toast";
import { listProductDetails, listProducts } from "../../actions/productActions";
import "./styles/_productdetail.scss";
import { addToCart } from "../../actions/cartActions";
import Product from "../shared/ProductComponent/Product";

const ProductDetail = () => {
  // const product = productsData.find((p) => p.id == productParam.id);
  const [qty, setQty] = useState(1);

  let productParam = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listProductDetails(productParam.slug));
    dispatch(listProducts());
  }, [dispatch, productParam.slug]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    // console.log("add to cart", productParam.slug);
    // navigate(`/shporta/${productParam.slug}?qty=${qty}`);
    if (productParam.slug) {
      dispatch(addToCart(productParam.slug, qty));
    }
    cogoToast.success(`${product?.title}`, {
      position: "top-right",
      heading: "Produkti u shtua ne shporte!",
    });
  };

  return (
    <div className='product-detail-component'>
      <div className='breadcrumb-nav '>
        <Link to='/' className='paragraph-text'>
          Ballina
        </Link>
        &nbsp;/&nbsp;
        <Link to='/' className='paragraph-text'>
          Produktet
        </Link>
        &nbsp;/&nbsp;
        <div className='breadcrumb-active paragraph-text'>{product?.title}</div>
      </div>
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
                  // product?.price_with_sale != null ? "active-sale" : ""
                  product?.price_with_sale ? "active-sale" : ""
                }`}
              >
                <span>Cmimi:</span> €{product?.price}
              </p>
              {product?.price_with_sale != null || 0 ? (
                <p className='product-price paragraph-text'>
                  <>
                    <span>Cmimi me zbritje: </span>
                    <span className='sale-price'>
                      {product?.price_with_sale}€
                    </span>
                  </>
                </p>
              ) : null}
              <p className='product-quantity paragraph-text'>
                Kategoria:&nbsp;
                <span className='product-extra-info'>
                  {product?.category?.title}
                </span>
              </p>
              <p className='product-quantity paragraph-text'>
                Brendi:&nbsp;
                <span className='product-extra-info'>{product?.brand}</span>
              </p>
              <p className='product-quantity paragraph-text'>
                Ngjyra:&nbsp;
                <div className='product-extra-info'>{product?.color}</div>
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
                Gjendja:&nbsp;
                {product?.quantity >= 1 && <span>I disponueshem</span>}
                {product?.quantity < 1 && <span>Nuk eshte ne dispozicion</span>}
              </p>
              {product?.quantity > 0 && (
                <p className='product-quantity paragraph-text'>
                  Sasia:&nbsp;
                  <input
                    value={qty}
                    type='number'
                    step='1'
                    min='1'
                    max={`${product.quantity}`}
                    onChange={(e) => setQty(e.target.value)}
                    className='styled-input'
                  />
                </p>
              )}

              <div className='cart-button-actions'>
                <button
                  className='shared-button pay-btn'
                  onClick={addToCartHandler}
                  disabled={product.quantity === 0}
                >
                  Shto ne shporte
                </button>
                {cartItems.length > 0 ? (
                  <button
                    className='shared-button navigate-cart-btn'
                    onClick={() => navigate("/shporta")}
                    disabled={product.quanitity === 0}
                  >
                    Shko ne shporte
                  </button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
      <div className='product-suggestions-container'>
        <div className='maylike-products-wrapper'>
          <h2 className='header-text'>Produkte tjera</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products.slice(0, 6).map((product, i) => {
                return <Product product={product} index={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
