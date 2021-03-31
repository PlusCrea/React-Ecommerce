import {
  GET_SLIDER,
  ADD_SLIDER,
  DELETE_SLIDER,
  EDIT_SLIDER,
  GET_SLIDER_WITH_ID,
  ERROR,
} from "../action/types";

const initialState = {
  sliders: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SLIDER:
      return {
        ...state,
        sliders: action.payload,
        loading: false,
      };
    case GET_SLIDER_WITH_ID:
      return {
        ...state,
        sliders: action.payload,
        loading: false,
      };
    case ADD_SLIDER:
      return {
        ...state,
        sliders: [action.payload, ...state.sliders],
      };
    case DELETE_SLIDER:
      return {
        ...state,
        sliders: state.sliders.filter(
          (slider) => slider._id !== action.payload
        ),
      };

    case EDIT_SLIDER:
      return {
        ...state,
        sliders: [action.payload, ...state.sliders],
      };

    case "UPDOWN_SLIDER":
      return {
        ...state,
        sliders: action.payload,
      };
    case ERROR:
      console.log("Reducer Error", action.payload.message);

      return {
        ...state,
        errors: action.payload.message,
      };
    default:
      return state;
  }
}
