import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";

const CartComponent = () => {
  // hooks
  let navigate = useNavigate();
  let productParam = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // get the items from the cart state 
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cartItems:", cartItems);

  // assign product slug from useParams to variable
  // and quantity from query string
  const productSlug = productParam.slug;
  const qty = searchParams.get("qty");

  // gets the url query string
  // console.log("QTY:", qty);

  // dispatch addToCart action with productSlug and qty as params,
  // sets the product added to cart on the redux store
  useEffect(() => {
    if (productSlug) {
      dispatch(addToCart(productSlug, qty));
    }
  }, [dispatch, productSlug, qty]);

  return (
    <div className='component-layout cart-component'>
      <h1 className='header-text'>Shporta e Produkteve</h1>
    </div>
  );
};

export default CartComponent;
