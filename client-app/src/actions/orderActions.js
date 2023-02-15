import axios from "axios";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";

export const createOrder =
  ({
    user_id,
    products,
    order_status,
    address,
    city,
    email,
    first_name,
    last_name,
    phone,
    state,
    postal_code,
    paymentMethod,
  }) =>
  async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("userInfo"));
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const { data } = await axios.post(
        `http://127.0.0.1:8000/order/`,
        {
          user: user_id,
          products,
          order_status,
          address,
          city,
          email,
          first_name,
          last_name,
          phone_number: phone,
          state,
          postal_code,
          paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      );

      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data,
      });

      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
