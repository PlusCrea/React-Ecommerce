const initialState = {
  menus: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  // console.log("Product Reducer", action);

  switch (action.type) {
    case "GET_MENU":
      return {
        ...state,
        menus: action.payload,
        loading: false,
      };
    case "GET_MENU_WITH_ID":
      return {
        ...state,
        menus: action.payload,
        loading: false,
      };
    case "ADD_MENU":
      return {
        ...state,
        menus: [action.payload, ...state.menus],
      };
    case "DELETE_MENU":
      return {
        ...state,
        menus: state.menus.filter((product) => product._id !== action.payload),
      };

    case "EDIT_MENU":
      return {
        ...state,
        menus: [action.payload, ...state.menus],
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
