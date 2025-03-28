import axios, { AxiosInstance } from "axios";
import Notify from "./notify";

export default class HttpHelper {
  static isError(error: any) {
    return axios.isAxiosError(error);
  }

  static getErrorMessage(error: unknown) {
    let errorMessage = "";
    const axiosError = this.isError(error) ? error : null;

    if (axiosError) {
      if (axiosError.response) {
        errorMessage = axiosError.response.data?.message || "Error inesperado...";
      } else if (axiosError.request) {
        errorMessage = "No se recibió respuesta del servidor...";
      } else {
        errorMessage = axiosError.message;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return errorMessage;
  }

  static withAuthorizationToken(axiosInstance: AxiosInstance, token: string) {
    axiosInstance.interceptors.request.use((config) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    });
  }

  static errorHandler(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const errorMesssage =
          error.response?.data?.message || error.message || "Error por defecto...";
        Notify.error(errorMesssage, { duration: 4000 });

        return Promise.reject(error);
      },
    );
  }
}
