import axios from "axios";
import config from "../config";
import {
  GET_TYPE,
  ADD_TYPE,
  EDIT_TYPE,
  DELETE_TYPE,
  TYPE_LOADING,
  GET_TYPE_WITH_CATEGORY,
  GET_TYPE_WITH_ID,
} from "./types";

const typeurl = `${config.apiUrl}/type`;

export const getTypeAction = () => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(typeurl).then((res) =>
    dispatch({
      type: GET_TYPE,
      payload: res.data,
    })
  );
};

export const getTypeActionWithId = (id) => (dispatch) => {
  axios.get(`${typeurl}/${id}`).then((res) =>
    dispatch({
      type: GET_TYPE_WITH_ID,
      payload: res.data,
    })
  );
};

export const getTypeActionWithCategory = (categoryid) => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(`${typeurl}/category/${categoryid}`).then((res) =>
    dispatch({
      type: GET_TYPE_WITH_CATEGORY,
      payload: res.data,
    })
  );
};

export const deleteTypeAction = (id) => (dispatch) => {
  axios.delete(`${typeurl}/delete/${id}`).then((res) =>
    dispatch({
      type: DELETE_TYPE,
      payload: id,
    })
  );
};

export const editTypeAction = (id, data) => (dispatch) => {
  axios.post(`${typeurl}/update/${id}`, data).then((res) =>
    dispatch({
      type: EDIT_TYPE,
      payload: res.data,
    })
  );
};

export const addTypeAction = (data) => (dispatch) => {
  axios.post(`${typeurl}/add`, data).then((res) =>
    dispatch({
      type: ADD_TYPE,
      payload: res.data,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: TYPE_LOADING,
  };
};
