import { setAlert } from "../../core/redux/coreActions";
import {
  addEducation,
  addExperience,
  createOrUpdateProfile,
  getCurrentUserProfile,
} from "../services/profile.service";
import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION_ERROR, EXPERIENCE_ERROR, GET_PROFILE, PROFILE_ERROR } from "./types";

export const getCurrentProfileAction = () => async (dispatch) => {
  try {
    const response = await getCurrentUserProfile();
    console.log("inside the profile action");
    dispatch({
      type: GET_PROFILE,
      payload: response,
    });
    console.log("after dispatch");
  } catch (error) {
    console.log("action profile ", JSON.stringify(error.response));
    dispatch({
      type: PROFILE_ERROR,
      payload: error,
    });
  }
};
export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      // Call service layer (axios call handled in profile.service.js)
      const data = await createOrUpdateProfile(formData);

      dispatch({
        type: GET_PROFILE,
        payload: data,
      });

      dispatch(
        setAlert(edit ? "Profile Updated" : "Profile Created", "success")
      );
    } catch (err) {
      // Handle validation errors array if present
      if (err.errors) {
        err.errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.statusText, status: err.status },
      });
    }
  };

  export const addEduationAction=(formData,edit=false)=>async(dispatch)=>{
    try{
      const data=await addEducation(formData);
      console.log("Education Added");
      dispatch({
        type: ADD_EDUCATION,
        payload: data,
      })
       dispatch(
        setAlert(edit ? "Education Edited" : "Education Added", "success")
      );
    }
    catch(err){
      if (err.errors) {
        err.errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: EDUCATION_ERROR,
         payload: { msg: err.statusText, status: err.status },

      })

    }
  }

   export const addExperienceAction=(formData)=>async(dispatch)=>{
    try{
      const data=await addExperience(formData);
      console.log("Experience Added");
      dispatch({
        type: ADD_EXPERIENCE,
        payload: data,
      })
       dispatch(
        setAlert( "Education Added", "success")
      );
    }
    catch(err){
      if (err.errors) {
        err.errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: EXPERIENCE_ERROR,
         payload: { msg: err.statusText, status: err.status },

      })

    }
  }