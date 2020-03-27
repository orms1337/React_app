import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Cache-Control"] = "no-cache";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export default axiosInstance;
