import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "http://localhost:8080";

export const apiAxios: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
