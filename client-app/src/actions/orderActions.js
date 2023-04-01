import axios from "axios";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
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
    selected_coupon,
    payment_type,
    additional_info,
  }) =>
  async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("userInfo"));
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const { data } = await axios.post(
        `http://127.0.0.1:8000/order/`,
        {
          user: user_id ? user_id : null,
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
          selected_coupon: selected_coupon ? selected_coupon : null,
          payment_type,
          additional_info,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token?.access}` : null,
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
      console.log("error", error);
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getOrderDetails = (id) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:8000/order/list/${id}`, {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });
    if (data) {
      console.log("porosite e klientit", data);
    }
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
