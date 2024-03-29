import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_API}api/v2/pages/${slug}/`
  );
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data.id,
      product: data.id,
      productSlug: data.meta.slug,
      name: data.title,
      price: data.price_with_sale ? data.price_with_sale : data.price,
      color: data.color,
      quantity: data.quantity,
      shipping: data.shipping,
      image: data.image,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (slug) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: slug,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
