const initialState = {
  parameters: [],
  loading: false,
  errors: "",
};

export default function (state = initialState, action) {
  // console.log("Param Reducer", action);

  switch (action.type) {
    case "GET_PARAMETERS":
      return {
        ...state,
        parameters: action.payload,
        loading: false,
      };
    case "ADD_BRAND":
      return {
        ...state,
        parameters: [action.payload, ...state.parameters],
      };
    case "ADD_TYPE":
      return {
        ...state,
        parameters: [action.payload, ...state.parameters],
      };
    case "UPDATE_BRAND":
      return {
        ...state,
        parameters: [action.payload, ...state.parameters],
      };
    case "DEL_BRAND":
      const filteredParameterstype = state.parameters.brand.filter(
        (parameter) => parameter !== action.payload.brand
      );
      //console.log("filter", filteredParameters);
      return {
        ...state,
        parameters: filteredParameterstype,
      };
    case "DEL_TYPE":
      return {
        ...state,
        parameters: [action.payload, ...state.parameters],
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
