import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
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
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { orderCreateReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userContact: userContactReducer,
  userUpdateProfile: userUpdateReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  singleCategory: categoryReducer,
  cart: cartReducer,
  order: orderCreateReducer,
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
