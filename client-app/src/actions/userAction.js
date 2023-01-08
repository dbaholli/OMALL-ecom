import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  USER_REGISTER_REQUEST,
  USER_LOGIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

export const register =
  (username, name, lastName, email, address, cityDropdown, stateDropdown, phone, password) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const { data } = await axios.post("http://127.0.0.1:8000/register/", {
        username: username,
        first_name: name,
        last_name: lastName,
        email: email,
        address: address,
        city: cityDropdown,
        state: stateDropdown,
        phone_number: phone,
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

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
