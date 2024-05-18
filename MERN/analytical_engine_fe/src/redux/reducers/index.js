import { combineReducers } from "redux";
import yourReducer from "./yourReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  yourReducer,
});

export default rootReducer;
