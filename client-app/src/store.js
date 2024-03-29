import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userContactReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  productDetailsReducer,
  productListReducer,
  trendingProductsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  categoryReducer,
  listCategoryReducer,
} from "./reducers/categoryReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
} from "./reducers/orderReducers";
import { bannerAdReducer } from "./reducers/bannerAdReducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userContact: userContactReducer,
  userUpdateProfile: userUpdateReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  trendingProductsList: trendingProductsReducer,
  bannerAds: bannerAdReducer,
  singleCategory: categoryReducer,
  allCategories: listCategoryReducer,
  cart: cartReducer,
  order: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const getUserInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const getShippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  userLogin: { userInfo: getUserInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: getShippingAddressFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
