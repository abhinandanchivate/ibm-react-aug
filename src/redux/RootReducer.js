import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";
import profileReducer from "../profile/redux/profileReducer";
import coreReducer from "../core/redux/coreReducer";

export default combineReducers({
  // add your reducers here
  // authReducer, profileReducer, postReducer
  authReducer,
  profileReducer,
  coreReducer,
});
