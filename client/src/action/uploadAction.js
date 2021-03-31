import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from "../action/types";
import config from "../config";
import axios from "axios";

const uploadurl = `${config.apiUrl}/file`;

export const uploadFileAction = (file) => (dispatch) => {
  //console.log("Upload Action", file);

  axios
    .post(`${uploadurl}/add`, file)
    .then((res) =>
      dispatch({
        type: UPLOAD_FILE,
        payload: res.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: error,
      })
    );
};
