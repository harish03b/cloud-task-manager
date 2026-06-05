import axios from "axios";

export const api = axios.create({
  baseURL: "https://dzszmmzxr5.execute-api.eu-north-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});