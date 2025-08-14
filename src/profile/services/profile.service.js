import API from "../../utils/api";

export const getCurrentUserProfile = async () => {
  try {
    const response = await API.get("/profile/me");
    return response.data;
  } catch (error) {
    console.error("inside the service ", error.response);
    console.log(error.response.statusText);
    console.log(error.response.status);
    const errorObject = {
      msg: error.response.statusText,
      status: error.response.status,
    };
    throw errorObject;
  }
};
// src/services/profile.service.js

// Purpose: Service layer for Profile APIs (React 19 compatible).
// Notes:
// - Uses the shared Axios instance `api`.
// - Normalizes errors so callers (thunks/components) can handle them consistently.

/**
 * Create or update the current user's profile.
 * @param {Object} formData - Fields to persist to the profile.
 * @returns {Promise<Object>} - The created/updated profile object (response.data).
 * @throws {{ status:number, statusText:string, errors?:Array<{msg:string}>, message?:string }}
 */
export async function createOrUpdateProfile(formData) {
  try {
    const res = await API.post("/profile", formData);
    return res.data;
  } catch (error) {
    // Normalize axios error shape for consistent upstream handling
    const resp = error?.response;
    const normalized = {
      status: resp?.status ?? 0,
      statusText: resp?.statusText ?? "Network Error",
      errors: resp?.data?.errors ?? null,
      message: resp?.data?.msg ?? error?.message ?? "Unknown error",
    };
    throw normalized;
  }
}

export const addEducation=async(formData)=>{
  try{
      const response = await API.put("/profile/education",formData);
      return response.data;
  }
  catch(error){
    const resp = error?.response;
    const normalized = {
      status: resp?.status ?? 0,
      statusText: resp?.statusText ?? "Network Error",
      errors: resp?.data?.errors ?? null,
      message: resp?.data?.msg ?? error?.message ?? "Unknown error",
    };
    throw normalized;

  }
}

export const addExperience=async(formData)=>{
  try{
      const response = await API.put("/profile/experience",formData);
      return response.data;
  }
  catch(error){
    const resp = error?.response;
    const normalized = {
      status: resp?.status ?? 0,
      statusText: resp?.statusText ?? "Network Error",
      errors: resp?.data?.errors ?? null,
      message: resp?.data?.msg ?? error?.message ?? "Unknown error",
    };
    throw normalized;

  }
}