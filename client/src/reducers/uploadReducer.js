import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from "../action/types";

const initialState = {
  filepath: "",
  filename: "",
  errmsg: "",
};

export default function (state = initialState, action) {
  //console.log("Upload Reducer", action);
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        filename: action.payload.fileName,
        filepath: action.payload.filePath,
      };
    case UPLOAD_FILE_ERROR:
      return { errmsg: action.payload };

    default:
      return state;
  }
}
