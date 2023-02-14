import axios from "axios";
import cogoToast from "cogo-toast";
import {
  CART_CLEAR_ITEMS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants";

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
          phone,
          state,
          postal_code,
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

      cogoToast.success(``, {
        position: "top-right",
        heading: "Porosia juaj eshte derguar!",
      });
      console.log("success order", data);
    } catch (error) {
      cogoToast.error(``, {
        position: "top-right",
        heading: "Porosia e produktit deshtoi!",
      });
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
