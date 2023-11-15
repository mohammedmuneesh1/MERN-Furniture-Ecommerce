import axios from "axios";
// Create a custom Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Your API base URL
});
// Add an interceptor to set the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken!=="" || jwtToken !=="null") {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});
export default axiosInstance;
