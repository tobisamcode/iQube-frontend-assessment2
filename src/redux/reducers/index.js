import { combineReducers } from "redux";
import regionReducer from "./regionReducer";
import covidReducer from "./covidReducer";

const rootReducer = combineReducers({
  region: regionReducer,
  covid: covidReducer,
});

export default rootReducer;
