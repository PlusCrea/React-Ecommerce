import {
  AUTH_SIGNUP,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
} from "../action/types";

//import { errorReducer } from "./errorReducer";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user,
  loggedIn: user ? true : false,
  loading: false,
  error: "",
  status: "",
};
//const initialState = user ? { loggedIn: true, user } : {};

export default function auth(state = initialState, action) {
  // console.log('Reducer', action);

  switch (action.type) {
    case AUTH_SIGNUP:
      return {
        //...errorReducer(state, action),
        loggingIn: true,
        user: action.payload,
        status: action.payload.status,
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload,
        status: action.payload.status,
      };
    case AUTH_ERROR:
      return {
        loggedIn: false,
        user: "",
        error: action.error,
        status: action.status,
      };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
