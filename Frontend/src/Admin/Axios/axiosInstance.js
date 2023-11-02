import axios from "axios";

// Create a custom Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Your API base URL
});

// Add an interceptor to set the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

export default axiosInstance;


























// // Get the JWT token from local storage
// const jwtToken = localStorage.getItem("jwtToken");

// // Create a custom Axios instance
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8000", // Your API base URL
// });

// // Conditionally add the Authorization header if the token exists
// if (jwtToken) {
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
// }

// export default axiosInstance;




// import axios from "axios";
