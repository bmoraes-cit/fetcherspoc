import { AxiosError, AxiosResponse } from "axios";
import { Api } from "./axios";

const handleResponseError = (error: AxiosError) => {
  // If there is an error in the response, handle it here
  // You can customize error handling according to your needs
  if (error.response) {
    // The server responded with an error status
    console.error("Server response error:", error.response.status);

    // For example, you can throw an exception, display an error message, etc.
  } else if (error.request) {
    // The request was made, but no response was received from the server
    console.error("No response from the server");
  } else {
    // Something happened while setting up the request that triggered the error
    console.error("Error configuring the request:", error.message);
  }

  // Return a Promise rejected with the error
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse): AxiosResponse => {
  // You can perform manipulations on the response data here, if necessary
  console.log("Successful response:", response.data);

  // Return the original response
  return response;
};

Api.interceptors.response.use(handleResponse, handleResponseError);
