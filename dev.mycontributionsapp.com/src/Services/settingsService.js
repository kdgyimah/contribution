import Http from "Utils/Http";

export const updateEmailService = (payload) =>
  Http.patch("/settings/email", payload);

export const updateAddressService = (payload) =>
  Http.patch("/settings/address", payload);

export const updatePasswordService = (payload) =>
  Http.patch("/settings/password", payload);

export const updateDefault2faService = (payload) =>
  Http.patch("/settings/default2fa", payload);
