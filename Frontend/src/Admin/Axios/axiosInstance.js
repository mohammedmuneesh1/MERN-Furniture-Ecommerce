import axios from "axios";

// Get the JWT token from local storage
const jwtToken = localStorage.getItem("jwtToken");
// Create a custom Axios instance with the token as a default header
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Your API base URL
  headers: {
    Authorization: `Bearer ${jwtToken}`,
  },
});

export default axiosInstance;
