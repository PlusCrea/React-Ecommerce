import axios from "axios";
import config from "../config";
import {
  GET_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_LOADING,
  GET_PRODUCT_WITH_ID,
  ERROR,
} from "./types";

const producturl = `${config.apiUrl}/product`;
/*
export const getProductAction = (variables) => (dispatch) => {
  dispatch(setItemsLoading());
  console.log("variables", variables);
  axios.post(producturl, variables).then((res) =>
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    })
  );
};
*/
export const getProductAction = () => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(producturl).then((res) =>
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    })
  );
};

export const getProductActionWithId = (id) => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(`${producturl}/${id}`).then((res) =>
    dispatch({
      type: GET_PRODUCT_WITH_ID,
      payload: res.data,
    })
  );
};

export const editProductAction = (id, data) => (dispatch) => {
  console.log("Action", data);

  axios.post(`${producturl}/update/${id}`, data).then((res) =>
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    })
  );
};

export const addProductAction = (data) => (dispatch) => {
  console.log("Production Action", data);

  axios
    .post(`${producturl}/add`, data)
    .then((res) =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: ERROR,
        payload: error,
      })
    );
};

export const deleteProductAction = (id) => (dispatch) => {
  axios.delete(`${producturl}/delete/${id}`).then((res) =>
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};
