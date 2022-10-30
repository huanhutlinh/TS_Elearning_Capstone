import Axios from "axios";
import { DOMAIN, TOKEN, TokenCyberSoft } from "../utilities/config";

export class baseService {
  https: any;
  constructor() {
    this.https = Axios.create({
      baseURL: DOMAIN,
      timeout: 30000,
    });
    this.https.interceptors.request.use(
      (config: any) => {
        config.headers = {
          ...config.headers,
          accept: "application/json",
          TokenCyberSoft: TokenCyberSoft,
          Authorization: `${
            localStorage.getItem(TOKEN)
              ? "Bearer " + localStorage.getItem(TOKEN)
              : ""
          }`,
        };
        return config;
      },
      (errors: any) => {
        return Promise.reject(errors);
      }
    );
  }

  post = (url: string, model: any) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  put = (url: string, model: any) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  get = (url: string) => {
    return this.https.get(url);
  };

  // get = (url) => {
  //   return Axios({
  //     url: `${DOMAIN}/${url}`,
  //     method: "GET",
  //     headers: { 'Authorization': "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
  //   });
  // };

  delete = (url: string) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
