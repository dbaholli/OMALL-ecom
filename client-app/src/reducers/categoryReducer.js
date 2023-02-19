import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_ALL_REQUEST,
  CATEGORY_LIST_ALL_SUCCESS,
  CATEGORY_LIST_ALL_FAIL,
} from "../constants/categoryConstants";

export const categoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: false, category: [] };

    case CATEGORY_LIST_SUCCESS:
      return { loading: false, category: action.payload };

    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listCategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_ALL_REQUEST:
      return { loading: false, categories: [] };

    case CATEGORY_LIST_ALL_SUCCESS:
      return { loading: false, categories: action.payload };

    case CATEGORY_LIST_ALL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
