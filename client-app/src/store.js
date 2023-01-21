import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userContactReducer,
} from "./reducers/userReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userContact: userContactReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems") ? 
  JSON.parse(localStorage.getItem("cartItems")) : [];

const getUserInfoFromStorage = localStorage.getItem("userInfo") ? 
  JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  userLogin: { userInfo: getUserInfoFromStorage },
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
