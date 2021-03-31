import axios from "axios";
import config from "../config";

const pageurl = `${config.apiUrl}/page`;

export const getPageAction = () => (dispatch) => {
  axios.get(pageurl).then((res) =>
    dispatch({
      type: "GET_PAGE",
      payload: res.data,
    })
  );
};

export const getPageActionWithId = (id) => (dispatch) => {
  axios.get(`${pageurl}/${id}`).then((res) =>
    dispatch({
      type: "GET_PAGE_WITH_ID",
      payload: res.data,
    })
  );
};

export const editPageAction = (id, data) => (dispatch) => {
  axios.post(`${pageurl}/update/${id}`, data).then((res) =>
    dispatch({
      type: "EDIT_PAGE",
      payload: res.data,
    })
  );
};

export const addPageAction = (data) => (dispatch) => {
  axios
    .post(`${pageurl}/add`, data)
    .then((res) =>
      dispatch({
        type: "ADD_PAGE",
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

export const deletePageAction = (id) => (dispatch) => {
  axios.delete(`${pageurl}/delete/${id}`).then((res) =>
    dispatch({
      type: "DELETE_PAGE",
      payload: id,
    })
  );
};
