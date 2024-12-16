import axios from "axios";

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: "https://millennium.api-soffcrm.uz/api/v1", // Base API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Modify or log the request before sending it (e.g., adding auth tokens)
    // Example: config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors globally
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
