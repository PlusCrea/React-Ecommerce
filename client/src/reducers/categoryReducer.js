import {
  GET_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  CATEGORY_LOADING,
  GET_CATEGORY_WITH_ID,
  ERROR,
} from "../action/types";

const initialState = {
  category: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_CATEGORY_WITH_ID:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [action.payload, ...state.category],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((data) => data._id !== action.payload),
      };

    case EDIT_CATEGORY:
      return {
        ...state,
        category: [action.payload, ...state.category],
      };
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
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
