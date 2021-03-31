import {
  GET_TYPE,
  ADD_TYPE,
  DELETE_TYPE,
  EDIT_TYPE,
  TYPE_LOADING,
  GET_TYPE_WITH_CATEGORY,
  GET_TYPE_WITH_ID,
} from "../action/types";

const initialState = {
  type: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TYPE:
      return {
        ...state,
        type: action.payload,
        loading: false,
      };
    case GET_TYPE_WITH_CATEGORY:
      return {
        ...state,
        type: action.payload,
        loading: false,
      };
    case GET_TYPE_WITH_ID:
      return {
        ...state,
        type: action.payload,
      };
    case ADD_TYPE:
      return {
        ...state,
        type: [action.payload, ...state.type],
      };
    case DELETE_TYPE:
      return {
        ...state,
        type: state.type.filter((TYPE) => TYPE._id !== action.payload),
      };

    case EDIT_TYPE:
      return {
        ...state,
        type: [action.payload, ...state.name],
      };
    case TYPE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
