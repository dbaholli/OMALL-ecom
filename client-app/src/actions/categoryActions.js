import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_ALL_REQUEST,
  CATEGORY_LIST_ALL_SUCCESS,
  CATEGORY_LIST_ALL_FAIL,
} from "../constants/categoryConstants";
import axios from "axios";

export const listCategory = (slug) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(`${import.meta.env.VITE_APP_API}products/${slug}/`);

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_ALL_REQUEST });

    const { data } = await axios.get(`${import.meta.env.VITE_APP_API}categories/`);

    dispatch({
      type: CATEGORY_LIST_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
