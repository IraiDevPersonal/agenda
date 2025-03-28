import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import BrowserStorage from "./browser-storage";
import HttpHelper from "./http-helper";

type CreateReturn = AxiosInstance & {
  getErrorMessage: (error: unknown) => string;
  withAuthorizationToken: () => void;
};

export default class HttpClient {
  constructor(private readonly storage: BrowserStorage) {}

  public create(config?: CreateAxiosDefaults) {
    const instance = axios.create(config);
    return {
      ...instance,
      getErrorMessage: (error: unknown) => HttpHelper.getErrorMessage(error),
      withAuthorizationToken: () => this.withAuthorization(instance),
    } as CreateReturn;
  }

  private withAuthorization(instance: AxiosInstance) {
    const token = this.storage.get<string>("");
    HttpHelper.withAuthorizationToken(instance, token);
  }
}
