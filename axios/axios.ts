import axios from "axios";

const BASE_URL = "url";

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // COMMON HEADERS
  },
});
