import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";
import { BASE_URL } from "../../utils/constants";

//add your BASE_URL to Constants file
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

// Handle request process
axiosInstance.interceptors.request.use(request => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;
