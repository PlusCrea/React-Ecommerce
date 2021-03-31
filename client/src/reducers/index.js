import { combineReducers } from "redux";
//import markReducer from './markReducer';
//import modelReducer from './modelReducer';
//import adsReducer from './adsReducer';
import authReducer from "./authReducer";
import productreducer from "./productreducer";
import typeReducer from "./typeReducer";
import categoryReducer from "./categoryReducer";
import uploadReducer from "./uploadReducer";
import sliderReducer from "./sliderReducer";
import pageReducer from "./pagereducer";
import menuReducer from "./menureducer";
import parametersReducer from "./parametersreducer";

export default combineReducers({
  //mark: markReducer,
  //model: modelReducer,
  //ads: adsReducer,
  auth: authReducer,
  category: categoryReducer,
  type: typeReducer,
  product: productreducer,
  upload: uploadReducer,
  slider: sliderReducer,
  page: pageReducer,
  menu: menuReducer,
  parameters: parametersReducer,
});
