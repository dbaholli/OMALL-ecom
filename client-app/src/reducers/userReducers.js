import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_CONTACT_REQUEST,
  USER_CONTACT_SUCCESS,
  USER_CONTACT_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: true, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: true };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return { loading: true, user: action.payload };

    case USER_DETAILS_FAIL:
      return { loading: true, error: action.payload };
  }
}

export const userContactReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONTACT_REQUEST:
      return { loading: true };

    case USER_CONTACT_SUCCESS:
      return { loading: true, userInfo: action.payload };

    case USER_CONTACT_FAIL:
      return { loading: true };

    default:
      return state;
  }
};
