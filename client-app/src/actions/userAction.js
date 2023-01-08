import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_LOGIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_CONTACT_REQUEST,
  USER_CONTACT_FAIL,
  USER_CONTACT_SUCCESS,
} from "../constants/userConstants";

export const register =
  (
    username,
    name,
    lastName,
    email,
    address,
    cityDropdown,
    stateDropdown,
    phone,
    password
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const { data } = await axios.post("http://127.0.0.1:8000/register/", {
        address: address,
        city: cityDropdown,
        email: email,
        first_name: name,
        last_name: lastName,
        phone_number: phone,
        state: stateDropdown,
        password: password,
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      console.log("Register success: ", data);
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post("http://127.0.0.1:8000/token/", {
      email: email,
      password: password,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:8000/profile/${id}`);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const contact =
  (email, fullname, message, mobileNumber) => async (dispatch) => {
    try {
      dispatch({
        type: USER_CONTACT_REQUEST,
      });

      const { data } = await axios.post("http://127.0.0.1:8000/contactus/", {
        email: email,
        full_name: fullname,
        message: message,
        phone_number: mobileNumber,
      });

      dispatch({
        type: USER_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_CONTACT_FAIL,
        payload: error.message,
      });
    }
  };
