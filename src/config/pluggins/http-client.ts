import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import BrowserStorage from "./browser-storage";
import HttpHelper from "./http-helper";

type CreateReturn = AxiosInstance & {
  getErrorMessage: (error: unknown) => string;
  withAuthorization: () => void;
};

export default class HttpClient {
  constructor(private readonly storage: BrowserStorage) {}

  public create(config?: CreateAxiosDefaults) {
    const instance = axios.create(config);
    return {
      ...instance,
      getErrorMessage: (error: unknown) => HttpHelper.getErrorMessage(error),
      withAuthorization: () => this.withAuthorization(instance),
    } as CreateReturn;
  }

  private withAuthorization(instance: AxiosInstance) {
    const token = this.storage.get<string>("");
    HttpHelper.withAuthToken(instance, token);
  }
}
