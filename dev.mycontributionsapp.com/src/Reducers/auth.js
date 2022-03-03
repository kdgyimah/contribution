import cookie from "Utils/cookie";

import { rootState } from "./";

export const login = (state, dispatch, payload) => {
  // set global cookie and local state
  cookie().setCookie("token", payload.access_token);
  return { token: payload.access_token };
};

export const logout = async () => {
  // delete global cookie and local state
  cookie().deleteCookie("token");
  return rootState;
};
