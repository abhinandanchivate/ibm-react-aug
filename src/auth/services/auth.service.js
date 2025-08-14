/*
type: public
endpoint: /api/users
method: POST
description: Register a new user
requestBody:{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456",}
*/

import API from "../../utils/api";

export const loadUserData = async () => {
  try {
    const response = await API.get("/auth");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users", userData);
    return { data: response.data.token, status: "success" };
  } catch (error) {
    const res = error.response;
    console.log("res data failulre :", error.response.data);
    if (res.status == 400) {
      throw { data: error.response.data.errors, status: "fail" };
    }
  }
};
const loginUser = async (formData) => {};
