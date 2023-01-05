import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../constants/userConstants";

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

    localStorage.setItem("userInfo", JSON.stringify(data.access));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};
