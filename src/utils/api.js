// to perform rest call to the backend server
// we need axios library
import axios from "axios";

const API = axios.create({
  baseURL: "/api", // vite config proxy will redirect this to http://localhost:9500/api
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptor to handle errors globally
API.interceptors.request.use((config) => {
  // token
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = `${token}`;
  }
  return config;
});
export default API;
