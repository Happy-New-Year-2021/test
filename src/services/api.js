import axios from "axios";

axios.defaults.withCredentials = false;
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export default apiClient;
