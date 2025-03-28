import BrowserStorage from "../pluggins/browser-storage";
import HttpClient from "../pluggins/http-client";

const storage = new BrowserStorage("token");
const httpClient = new HttpClient(storage);

export const agendaApi = httpClient.create({
  baseURL: "http://localhost:3000/api",
});

const time = 1000;
// TODO: para demorara las consultas y ver los loader
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
  },
);
