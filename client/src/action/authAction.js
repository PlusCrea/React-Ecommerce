import axios from "axios";
import config from "../config";
import { returnErrors } from "./errorActions";
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_SIGNUP,
  AUTH_ERROR,
} from "./types";

const authurl = `${config.apiUrl}/Auth`;

export const loginAuthAction = ({ email, password }) => (dispatch) => {
  //dispatch(setItemsLoading());
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //console.log('Login Action');

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post(`${authurl}/login`, body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
        status: true,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.data, err.status, "LOGIN_FAIL"));
      dispatch({
        type: AUTH_ERROR,
        status: false,
        payload: err.response.data,
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const getCurrentUser = () => {
  const User = JSON.parse(localStorage.getItem("userToken"));
  if (User) return User;
  else return "";
  //return JSON.parse(localStorage.getItem("userToken"));
};
/*
export const loginAuthAction = data => dispatch => {
    //dispatch(setItemsLoading());
 
    axios
        .get('http://localhost:3300/Auth/login', data)
        .then(res =>
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data
            })
        )
 
};
 
*/
export const signupAuthAction = (data) => (dispatch) => {
  //console.log('Action',data);

  axios
    .post(`${authurl}/signup`, data)
    .then((res) =>
      dispatch({
        type: AUTH_SIGNUP,
        payload: res.data,
        status: true,
        error: "",
      })
    )
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
        status: false,
        //payload: err.response.data
        payload: "",
        error: err,
      });
    });
};
