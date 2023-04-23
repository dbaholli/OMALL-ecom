import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import axios from "axios";
import cogoToast from "cogo-toast";
import { listProducts } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import ImageSlider from "../shared/ProductComponent/ImageSlider";
import OtherProducts from "../shared/ProductComponent/OtherProducts";
import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../../constants/productConstants";
import "./styles/_productdetail.scss";

const ProductDetail = () => {
  // const product = productsData.find((p) => p.id == productParam.id);
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let productParam = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, product } = productDetails;

  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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

  const getProduct = (slug) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });

      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_API}api/v2/pages/${slug}/`
      );
      setProduct(data);
      setLoading(false);
      dispatch({
        type: PRODUCT_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      console.log("Error get product:", error);
    }
  };

  useEffect(() => {
    // dispatch(listProductDetails(productParam.slug));
    dispatch(getProduct(productParam.slug));
    dispatch(listProducts(0, 6));
  }, [productParam.slug]);

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
        ) : error ? (
          <h1 className='header-text'>Produkti nuk u gjend!</h1>
        ) : product ? (
          <>
            <div className='productimage-container'>
              <ImageSlider images={product?.image} />
            </div>
            <div className='product-info'>
              <h1 className='product-title header-text'>{product?.title}</h1>
              <p
                className={`product-price paragraph-text ${
                  product?.price_with_sale ? "active-sale" : ""
                }`}
              >
                <span>Cmimi:</span> {product?.price}€
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
              <div className='product-info-details'>
                <p className='product-quantity paragraph-text'>
                  Kategoria:&nbsp;
                  <span className='product-extra-info paragraph-text'>
                    {product?.category?.title}
                  </span>
                </p>
                <span className='seperate-line'>|</span>
                <p className='product-quantity paragraph-text'>
                  Brendi:&nbsp;
                  <span className='product-extra-info paragraph-text'>
                    {product?.brand}
                  </span>
                </p>
                <span className='seperate-line'>|</span>
                <p className='product-quantity paragraph-text'>
                  Ngjyra:&nbsp;
                  <span className='product-extra-info paragraph-text'>
                    {product?.color}
                  </span>
                </p>
              </div>
              <h2 className='product-desc paragraph-text'>
                {product?.description}
              </h2>
              <h2 className='product-desc paragraph-text'>
                {product?.shipping ? (
                  <span>Transporti: {product?.shipping}€</span>
                ) : (
                  <span>Nuk ka transport</span>
                )}
              </h2>
              <p className='product-quantity paragraph-text'>
                Gjendja:&nbsp;
                {product?.quantity > 10 && (
                  <span>I disponueshem (me shume se 10 artikuj)</span>
                )}
                {product?.quantity > 1 && product.quantity < 10 && (
                  <span>I disponueshem (me shume se 1 artikuj)</span>
                )}
                {product?.quantity === 1 && (
                  <span>I disponueshem (vetem 1 i mbetur)</span>
                )}
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
                    max={`${product?.quantity}`}
                    onChange={(e) => setQty(e.target.value)}
                    className='styled-input'
                  />
                </p>
              )}

              <div className='cart-button-actions'>
                <button
                  className='shared-button pay-btn'
                  onClick={addToCartHandler}
                  disabled={product?.quantity === 0}
                >
                  <BsCartPlusFill fontSize={20} />
                  Shto ne shporte
                </button>
                {cartItems.length > 0 ? (
                  <button
                    className='shared-button navigate-cart-btn'
                    onClick={() => navigate("/shporta")}
                    disabled={product?.quantity === 0}
                  >
                    Shko ne shporte
                  </button>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <h1 className='header-text'>Produkti nuk u gjend</h1>
        )}
      </div>
      <div className='product-suggestions-container'>
        <div className='maylike-products-wrapper'>
          <h2 className='header-text'>Produkte tjera</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products?.items?.map((product, i) => {
                return <OtherProducts product={product} index={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
