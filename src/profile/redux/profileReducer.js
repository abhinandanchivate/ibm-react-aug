import {
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  CREATE_PROFILE,
  EDUCATION_ERROR,
  EXPERIENCE_ERROR,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "./types";

const initialState = {
  currentProfile: null,
  loading: true,
  error: null,
  profiles: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PROFILE:
    case CREATE_PROFILE:
    case GET_PROFILE:
    case ADD_EDUCATION:
    case ADD_EXPERIENCE:
      return { ...state, currentProfile: payload,loading:false };
    case PROFILE_ERROR:
    case EDUCATION_ERROR:
    case EXPERIENCE_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
        currentProfile: null,
        loading: false,
      };

    

    default:
      return state;
  }
};
