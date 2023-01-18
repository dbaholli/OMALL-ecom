import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/api/v2/pages/${slug}/`
  );

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.meta.slug,
      name: data.title,
      image: data.image,
      price: data.price,
      color: data.color,
      countInStock: data.quanitity,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
