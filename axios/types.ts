import { AxiosError } from "axios";

export interface ApiResponse<T = object> {
  success: boolean;
  data?: T;
  message?: string;
  error?: AxiosError;
}
