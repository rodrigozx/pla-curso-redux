import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

const rootRedurer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export default rootRedurer;
