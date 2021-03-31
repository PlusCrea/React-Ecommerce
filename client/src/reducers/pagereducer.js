const initialState = {
  pages: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  // console.log("Product Reducer", action);

  switch (action.type) {
    case "GET_PAGE":
      return {
        ...state,
        pages: action.payload,
        loading: false,
      };
    case "GET_PAGE_WITH_ID":
      return {
        ...state,
        pages: action.payload,
        loading: false,
      };
    case "ADD_PAGE":
      return {
        ...state,
        pages: [action.payload, ...state.pages],
      };
    case "DELETE_PAGE":
      return {
        ...state,
        pages: state.pages.filter((product) => product._id !== action.payload),
      };

    case "EDIT_PAGE":
      return {
        ...state,
        pages: [action.payload, ...state.pages],
      };
    case "PRODUCT_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      console.log("Reducer Error", action.payload.message);

      return {
        ...state,
        errors: action.payload.message,
      };
    default:
      return state;
  }
}
