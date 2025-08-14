import { setAlert } from "../../core/redux/coreActions";
import { CLEAR_PROFILE } from "../../profile/redux/types";
import API from "../../utils/api";
import { loadUserData, registerUser } from "../services/auth.service";
import { AUTH_ERROR, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from "./types";

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE,
  });
};
export const userLoadAction = () => async (dispatch) => {
  try {
    const response = await loadUserData();
    dispatch({ type: USER_LOADED, payload: response });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};
// will hold the changes needs to be done in the store.
export const registerAction = (formData) => async (dispatch) => {
  // dispatch : is a function provided by the store.
  // its job is to send actions to the redux store . so that reducer can update the state.
  // redux thunk will provide the same .
  try {
    const res = await registerUser(formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // success alert
    dispatch(setAlert("Registered Successfully", "success"));
    dispatch(userLoadAction());
  } catch (err) {
    const errors = err.data;
    console.log(JSON.stringify(errors));

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
