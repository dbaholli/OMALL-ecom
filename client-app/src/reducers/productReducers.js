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

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const trendingProductsReducer = (state = { trendingProducts: [] }, action) => {
  switch (action.type) {
    case TRENDING_PRODUCTS_REQUEST:
      return { loading: true, trendingProducts: [] };

    case TRENDING_PRODUCTS_SUCCESS:
      return { loading: false, trendingProducts: action.payload };

    case TRENDING_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
