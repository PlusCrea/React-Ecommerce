import {
  GET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  PRODUCT_LOADING,
  GET_PRODUCT_WITH_ID,
  ERROR,
} from "../action/types";

const initialState = {
  products: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  // console.log("Product Reducer", state.products, action.type);

  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT_WITH_ID:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: [action.payload, []],
      };
    case PRODUCT_LOADING:
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
