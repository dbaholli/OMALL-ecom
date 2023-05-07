import axios from "axios";
import { toast } from "react-toastify";
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
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/userConstants";

export const register =
  (
    name,
    lastName,
    email,
    address,
    postalCode,
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
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API}register/`,
        {
          address: address,
          postal_code: postalCode,
          city: cityDropdown,
          email: email,
          first_name: name,
          last_name: lastName,
          phone_number: phone,
          state: stateDropdown,
          password: password,
        }
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      console.log("Register success: ", data);
      toast.success("Jeni regjistruar me sukses!");
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.message,
      });
      toast.error("Regjistrimi ka deshtuar!");
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post(`${import.meta.env.VITE_APP_API}token/`, {
      email: email,
      password: password,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    toast.success("Jeni kyqur me sukses!");
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
    toast.error("Gabim!");
  }
};

export const getUserDetails = (id) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("userInfo"));
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_API}profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      }
    );

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

export const updateUserDetails =
  (
    token,
    id,
    name,
    lastName,
    email,
    address,
    postalCode,
    phone,
    cityDropdown,
    stateDropdown
  ) =>
  async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("userInfo"));

    try {
      dispatch({ type: USER_UPDATE_REQUEST });

      const { data } = await axios.put(
        `${import.meta.env.VITE_APP_API}profile/${id}`,
        {
          address: address,
          city: cityDropdown,
          email: email,
          postal_code: postalCode,
          first_name: name,
          last_name: lastName,
          phone_number: phone,
          state: stateDropdown,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access}`,
          },
        }
      );

      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      // localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("update successful", data);
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("shippingAdress");
  dispatch({ type: USER_LOGOUT });
};

export const contact =
  (email, fullName, message, mobileNumber) => async (dispatch) => {
    try {
      dispatch({
        type: USER_CONTACT_REQUEST,
      });

      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API}contactus/`,
        {
          email: email,
          full_name: fullName,
          message: message,
          phone_number: mobileNumber,
        }
      );

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
