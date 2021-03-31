import axios from "axios";
import config from "../config";

const menuurl = `${config.apiUrl}/menu`;

export const getMenuAction = () => (dispatch) => {
  axios.get(menuurl).then((res) =>
    dispatch({
      type: "GET_MENU",
      payload: res.data,
    })
  );
};

export const getMenuActionWithId = (id) => (dispatch) => {
  axios.get(`${menuurl}/${id}`).then((res) =>
    dispatch({
      type: "GET_MENU_WITH_ID",
      payload: res.data,
    })
  );
};

export const editMenuAction = (id, data) => (dispatch) => {
  axios.post(`${menuurl}/update/${id}`, data).then((res) =>
    dispatch({
      type: "EDIT_MENU",
      payload: res.data,
    })
  );
};

export const addMenuAction = (data) => (dispatch) => {
  axios
    .post(`${menuurl}/add`, data)
    .then((res) =>
      dispatch({
        type: "ADD_MENU",
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

export const deleteMenuAction = (id) => (dispatch) => {
  axios.delete(`${menuurl}/delete/${id}`).then((res) =>
    dispatch({
      type: "DELETE_MENU",
      payload: id,
    })
  );
};
