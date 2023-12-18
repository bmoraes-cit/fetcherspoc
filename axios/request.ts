import { InternalAxiosRequestConfig } from "axios";
import { Api } from "./axios";

const handleRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { headers } = config;
  // Modify the request configuration here
  console.log("Sending request:", config);

  // You can add additional headers, modify request data, etc.
  // const token = sessionStorage.getItem("tokenProfessionalUsers") || "";

  // if (token) {
  //   headers.set("jwt-token", token);
  // }

  return config;
};

const handleRequestError = (error: unknown): Promise<never> => {
  // If there is an error in the request configuration, handle it here
  console.error("Error in request configuration:", error);

  // Return a Promise rejected with the error
  return Promise.reject(error);
};

Api.interceptors.request.use(handleRequest, handleRequestError);
