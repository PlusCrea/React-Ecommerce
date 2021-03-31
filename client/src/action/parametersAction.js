import axios from "axios";
import config from "../config";

const pageurl = `${config.apiUrl}/parameters`;

export const addBrandAction = (data) => (dispatch) => {
  axios
    .post(`${pageurl}/addbrand`, data)
    .then((res) =>
      dispatch({
        type: "ADD_BRAND",
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};

export const addTypeAction = (data) => (dispatch) => {
  axios
    .post(`${pageurl}/addtype`, data)
    .then((res) =>
      dispatch({
        type: "ADD_TYPE",
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};
export const updateCategoryAction = (olddata, data) => (dispatch) => {
  axios
    .post(`${pageurl}/updatecategory/${olddata}`, data)
    .then((res) =>
      dispatch({
        type: "UPDATE_BRAND",
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};

export const deleteBrandAction = (data) => (dispatch) => {
  axios
    .post(`${pageurl}/delbrand/`, data)
    .then((res) =>
      dispatch({
        type: "DEL_BRAND",
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};

export const deleteTypeAction = (data) => (dispatch) => {
  axios
    .post(`${pageurl}/deltype/`, data)
    .then((res) =>
      dispatch({
        type: "DEL_TYPE",
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};

/*
export const deleteBrandAction = (data) => (dispatch) => {
  console.log("Action", data);
  axios
    .post(`${pageurl}/delbrand`, data)
    .then((res) =>
      dispatch({
        type: "DEL_BRAND",
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: "ERROR",
        payload: error,
      })
    );
};
*/
export const getParametersAction = () => (dispatch) => {
  axios.get(pageurl).then((res) =>
    dispatch({
      type: "GET_PARAMETERS",
      payload: res.data,
    })
  );
};
