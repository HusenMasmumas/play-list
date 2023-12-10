import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { apiURL } from "../config/api";

const axios = Axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  validateStatus: (status) => status >= 400,
});

interface AxiosCustomRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  _retry: boolean;
}

interface AxiosCustomError<T = any, D = any> extends AxiosError<T, D> {
  config: AxiosCustomRequestConfig<D>;
}
const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig<any>> => {
  // const acToken = localStorage.getItem("access_token");

  config.validateStatus = (_) => true;

  config.headers["Authorization"] = `Bearer  `;
  axios.defaults.headers.common["Authorization"] = `Bearer `;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosCustomError) => {
  if (error.response) {
    if (error.response.status === 403 && error.response.data) {
      return Promise.resolve(error.response.data);
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);

axios.interceptors.response.use(onResponse, onResponseError);
export default axios;

export const thrownResponse = async (res: AxiosResponse) => {
  if (
    (res.status === 401 && res?.data?.message === "token expired") ||
    res?.data?.message === "token not active"
  ) {
  }

  throw JSON.stringify(res?.data);
};
