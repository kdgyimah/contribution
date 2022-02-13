import React, { setGlobal } from "reactn";
import { toast } from "react-toastify";
import axios from "axios";

import Notify from "Components/Notify";
import cookie from "./cookie";

/**
 * variables
 */
const rootState = {
  token: null,
};

/**
 * functions
 */
export const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Http.interceptors.request.use((config) => {
  const { getCookie } = cookie();

  if (!config?.unauthenticated) {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

Http.interceptors.response.use(
  ({ data: { data, pagination } }) =>
    pagination ? { data, pagination } : data,
  (error) => {
    if (error.response?.status) {
      if (error.response.status === 401) {
        cookie().deleteCookie("token");
        setGlobal(rootState);
      }

      if (error.response.status === 500) {
        toast(<Notify body="A server error occured" type="error" />);
      }

      return Promise.reject(
        error.response.data.error || error.response.data.message,
      );
    }

    return Promise.reject(error);
  },
);

export default Http;
