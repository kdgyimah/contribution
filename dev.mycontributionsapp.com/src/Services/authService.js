import Http from "Utils/Http";

export const loginService = (payload) =>
  Http.post("/auth/login", payload, { unauthenticated: true });

export const registerService = (payload) =>
  Http.post("/auth/register", payload, { unauthenticated: true });

export const requestVerificationLinkService = () =>
  Http.get("/auth/email/resend");

export const addPhoneNumberService = (payload) => Http.post("/phones", payload);

export const updatePhoneNumberService = (payload) =>
  Http.put("/phones", payload);

export const send2faService = () => Http.post("/user-2fa/send");
