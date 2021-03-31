import axios from "axios";
import config from "../config";
import {
  GET_CATEGORY,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY_LOADING,
  GET_CATEGORY_WITH_ID,
  ERROR,
} from "./types";

const categoryurl = `${config.apiUrl}/category`;

export const getCategoryAction = () => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(categoryurl).then((res) =>
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    })
  );
};

export const getCategoryActionWithId = (id) => (dispatch) => {
  dispatch(setItemsLoading());

  axios.get(`${categoryurl}/${id}`).then((res) =>
    dispatch({
      type: GET_CATEGORY_WITH_ID,
      payload: res.data.name,
    })
  );
};

export const editCategoryAction = (id, data) => (dispatch) => {
  axios.post(`${categoryurl}/update/${id}`, data).then((res) =>
    dispatch({
      type: EDIT_CATEGORY,
      payload: res.data,
    })
  );
};

export const addCategoryAction = (data) => (dispatch) => {
  axios
    .post(`${categoryurl}/add`, data)
    .then((res) =>
      dispatch({
        type: ADD_CATEGORY,
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

export const deleteCategoryAction = (id) => (dispatch) => {
  axios.delete(`${categoryurl}/delete/${id}`).then((res) =>
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: CATEGORY_LOADING,
  };
};
