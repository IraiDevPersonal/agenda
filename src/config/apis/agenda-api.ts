import { BrowserStorage } from "../browser-storage";
import { HttpClient } from "../http-client";

const storage = new BrowserStorage("token");
const httpClient = new HttpClient(storage);

export const agendaApi = httpClient.create({
  baseURL: "http://localhost:3000/api",
});

const time = 3000;

agendaApi.interceptors.response.use(
  (response) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), time);
    });
  },
  (error) => {
    return new Promise((_, reject) => {
      setTimeout(() => reject(error), time);
    });
  }
);
