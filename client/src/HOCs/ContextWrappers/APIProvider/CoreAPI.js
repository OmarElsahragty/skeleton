import axios from "axios";
import { BASE_URL } from "../../../constants";
import { AuthCaller } from "./APICalls";

class CoreAPI {
  constructor() {
    this.caller = axios.create({
      baseURL: BASE_URL,
      headers: { "accept-language": "EN" },
    });
    this.__addInterceptors();
    this.Auth = new AuthCaller(this.caller);
  }

  __addInterceptors() {
    this.caller.interceptors.request.use(
      (req) => req,
      () => {
        return {
          data: null,
          err: "Something went wrong check your connection and try again!",
        };
      }
    );

    this.caller.interceptors.response.use(
      (res) => {
        return { err: null, data: res.data.data };
      },
      (err) => {
        return {
          data: null,
          err: err?.response?.data?.error?.message || "Something went wrong!",
        };
      }
    );
  }

  async addCommonHeader(key, value) {
    this.caller.defaults.headers.common[key] = value;
  }

  async removeCommonHeader(key) {
    this.caller.defaults.headers.common[key] = null;
  }
}

export default new CoreAPI();
