import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "./types";

const initialState = {
  user: null,
  loading: false,
  errors: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return { ...state, user: payload, loading: false };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
        errors: [],
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};
