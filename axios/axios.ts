import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "jwt-token",
    "Access-Control-Expose-Headers": "jwt-token",
    // COMMON HEADERS
  },
});
