import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  TRENDING_PRODUCTS_REQUEST,
  TRENDING_PRODUCTS_SUCCESS,
  TRENDING_PRODUCTS_FAIL,
} from "../constants/productConstants";

export const listProducts = (offset, limit) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(
      `${
        import.meta.env.VITE_APP_API
      }api/v2/pages/?type=products.Product&fields=_,id,slug,title,description,price,price_with_sale,quantity,currency,shipping,color,brand,rating,category,image&offset=${offset}&limit=${limit}`
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTrendingProducts = () => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_PRODUCTS_REQUEST });

    const { data } = await axios.get(
      `${
        import.meta.env.VITE_APP_API
      }api/v2/pages/?type=home.HomePage&fields=_,id,title,trending_products`
    );
    dispatch({
      type: TRENDING_PRODUCTS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: TRENDING_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}api/v2/pages/${slug}/`
    );

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
  }
};
