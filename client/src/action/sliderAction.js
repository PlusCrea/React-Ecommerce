import axios from "axios";
import config from "../config";
import {
  GET_SLIDER,
  ADD_SLIDER,
  EDIT_SLIDER,
  DELETE_SLIDER,
  GET_SLIDER_WITH_ID,
  ERROR,
} from "./types";

const sliderurl = `${config.apiUrl}/slider`;

export const getSliderAction = () => (dispatch) => {
  axios.get(sliderurl).then((res) =>
    dispatch({
      type: GET_SLIDER,
      payload: res.data,
    })
  );
};

export const getSliderActionWithId = (id) => (dispatch) => {
  axios.get(`${sliderurl}/${id}`).then((res) =>
    dispatch({
      type: GET_SLIDER_WITH_ID,
      payload: res.data,
    })
  );
};

export const editSliderAction = (id, data) => (dispatch) => {
  axios.post(`${sliderurl}/update/${id}`, data).then((res) =>
    dispatch({
      type: EDIT_SLIDER,
      payload: res.data,
    })
  );
};

export const upDownSliderAction = (id, order, updown, data) => (dispatch) => {
  axios.post(`${sliderurl}/updown/${id}/${order}/${updown}`, data).then((res) =>
    dispatch({
      type: "UPDOWN_SLIDER",
      payload: res.data,
    })
  );
};

export const addSliderAction = (data) => (dispatch) => {
  axios
    .post(`${sliderurl}/add`, data)
    .then((res) =>
      dispatch({
        type: ADD_SLIDER,
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

export const deleteSliderAction = (id) => (dispatch) => {
  axios.delete(`${sliderurl}/delete/${id}`).then((res) =>
    dispatch({
      type: DELETE_SLIDER,
      payload: id,
    })
  );
};
