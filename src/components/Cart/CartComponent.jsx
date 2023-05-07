import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BsFillTrashFill } from "react-icons/bs";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import "./styles/_cartcomponent.scss";

const CartComponent = () => {
  // hooks
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
  const [quantity, setQuantity] = useState();

  // dispatch addToCart action with productSlug and qty as params,
  // sets the product added to cart on the redux store
  useEffect(() => {
    if (productSlug) {
      dispatch(addToCart(productSlug, qty));
    }
  }, [dispatch, productSlug, qty]);

  const removeFromCartHandler = (slug) => {
    dispatch(removeFromCart(slug));
    toast.error("Produkti u largua nga shporta!");
  };

  const checkoutHandler = () => {
    navigate("/detajet-e-porosise");
  };

  return (
    <div className='component-layout cart-component'>
      <div className='products-layout'>
        <h1 className='cart-title header-text'>Produktet ne shporte</h1>
        {cartItems.length === 0 ? (
          <h2 className='paragraph-text'>
            Shporta eshte e zbrazet. <Link to='/'>Shko te produktet</Link>
          </h2>
        ) : (
          <div className='cart-products'>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-product-rows'>
                <img
                  src={`${import.meta.env.VITE_APP_API}${
                    item.image[0].value.image.original.src
                  }`}
                  alt='Othman'
                  className='cartproduct-image'
                />
                <Link
                  className='product-name paragraph-text'
                  to={`/produkti/${item.product}`}
                >
                  {item.name}
                </Link>
                <p className='paragraph-text'>{item.price}€</p>
                <div className='paragraph-text'>Sasia: {item.qty}</div>
                <BsFillTrashFill
                  color='blue'
                  onClick={() => removeFromCartHandler(item.product)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='cart-layout'>
        <h1 className='header-text'>Shporta</h1>
        <p className='cart-text paragraph-text'>
          Sasia: ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
        </p>

        {cartItems.slice(0, 1).map((item) => (
          <p className='cart-text paragraph-text'>
            Transporti: {item.shipping}€
          </p>
        ))}
        <p className='cart-total paragraph-text'>
          Totali:{" "}
          {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}€
        </p>
        <div className='cart-buttons'>
          <button
            className='shared-button navigate-cart-btn'
            onClick={() => navigate("/")}
          >
            Kthehu
          </button>
          <button
            className='shared-button cart-pay-btn'
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Vazhdo me pagese
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
