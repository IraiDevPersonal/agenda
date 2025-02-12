import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { BrowserStorage } from "./browser-storage";

type CreateReturn = AxiosInstance & {
  getErrorMessage: (error: unknown) => string;
  withAuthorizationToken: () => void;
};

export class HttpClient {
  constructor(private readonly storage: BrowserStorage) {}

  public create(config?: CreateAxiosDefaults) {
    const instance = axios.create(config);
    return {
      ...instance,
      getErrorMessage: (error: unknown) => this.getErrorMessage(error),
      withAuthorizationToken: () => this.withAuthorizationToken(instance),
    } as CreateReturn;
  }

  private getErrorMessage(error: unknown) {
    if (axios.isAxiosError(error)) {
      const defaultError = error.message;
      return (error.response?.data?.error as string) ?? defaultError;
    }

    const { message } = error as Error;
    return message;
  }

  private withAuthorizationToken(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.request.use((config) => {
      const token = this.storage.get();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    });
  }
}
