import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_GETPROFILE_REQUEST,
  USER_GETPROFILE_SUCCESS,
  USER_GETPROFILE_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: true, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: true };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: true };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const getUserReducer = (state = { loggedInUser: {} }, action) => {
  switch (action.type) {
    case USER_GETPROFILE_REQUEST:
      return { loading: true, loggedInUser: {} };

    case USER_GETPROFILE_SUCCESS:
      return { loading: false, loggedInUser: action.payload };

    case USER_GETPROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
