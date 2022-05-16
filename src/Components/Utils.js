import { error } from "./MyAlerts";
import { baseURL } from "./Variable";
import axios from "axios";

export const checkNetworkErr = (err) => {
     if (err?.message === "Network Error") {
          error("Network Error")
     }
}

export const api = axios.create({
     baseURL
});

api.interceptors.request.use(
     config => {
          const token = localStorage.getItem('token')
          config.headers['Authorization'] = token;
          return config;
     },
     error => {
          return Promise.reject(error);
     }
);

api.interceptors.response.use((response) => response, (err) => {
     if (err?.message === "Network Error") {
          error("Network Error")
          window.location.reload()
     }
     throw err
});
