const DEFAULT_ERROR_MESSAGE = "DEFAULT_ERROR_MESSAGE";

export const errorReducer = (state, action) => {
console.log("Error", action.payload);


  if (!action.payload.status) {
    return {
      ...state,
      error: null,
    };
  }

  return {
    ...state,
    error: {
      errorMessage: DEFAULT_ERROR_MESSAGE,
      ...action.payload.response.data,
    },
  };
};
