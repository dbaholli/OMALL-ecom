import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import cogoToast from "cogo-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartActions";

const Product = (product, i) => {
  // use the props from the featured product component to display product data
  let navigate = useNavigate();
  let productParam = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // get the items from the cart state
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log("cartItems:", cartItems);

  // assign product slug from useParams to variable
  // and quantity from url query string
  const productSlug = productParam.slug;
  const qty = Number(searchParams.get("qty"));
  // console.log(qty);

  // dispatch addToCart action with productSlug and qty as params,
  // sets the product added to cart on the redux store
  useEffect(() => {
    if (productSlug) {
      dispatch(addToCart(productSlug, qty));
    }
  }, [dispatch, productSlug, qty]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    // console.log("add to cart", productParam.slug);
    // navigate(`/shporta/${product.product.slug}?qty=${qty}`);
    if (product.product.slug) {
      dispatch(addToCart(product.product.slug, qty));
    }
    cogoToast.success(`${product?.product.title}`, {
      position: "top-right",
      heading: "Produkti u shtua ne shporte!",
    });
  };

  return (
    <>
      <Link
        className='product-card hvr-float'
        key={i}
        to={`/produkti/${product.product.slug}`}
      >
        <div className='productimage-container'>
          <img
            className='featuredproduct-image'
            height='350px'
            src={`http://127.0.0.1:8000/${product.product.image.url}`}
          ></img>
        </div>
        <div className='featuredproduct-info'>
          <h3 className='paragraph-text'>{product.product.title}</h3>
          <p className='price paragraph-text'>{product.product.price}€</p>
          <p className='paragraph-text'>Sasia: {product.product.quantity}</p>
        </div>
        <div className='product-actions'>
          <Link to={`/produkti/${product.product.slug}`}>Shiko detajet</Link>
          {/* <BsCartPlusFill /> */}
        </div>
      </Link>
    </>
  );
};

export default Product;
