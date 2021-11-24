import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { namedRoutes } from "../Routes";
import VerifyPhoneNumber from "./Auth/VerifyPhoneNumber";
import ForgotPassword from "./Auth/ForgotPassword";
import PasswordReset from "./Auth/PasswordReset";
import VerifyEmail from "./Auth/VerifyEmail";
import EmailVerify from "./Auth/EmailVerify";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

const Auth = () => {
  /**
   * variables
   */
  const { login, signup, passwordReset, verify, forgotPassword } =
    namedRoutes.auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={login} element={<Login />} />
          <Route exact path={signup} element={<SignUp />} />
          <Route exact path={verify.email} element={<VerifyEmail />} />
          <Route exact path={passwordReset} element={<PasswordReset />} />
          <Route exact path={verify.emailVerify} element={<EmailVerify />} />
          <Route exact path={forgotPassword} element={<ForgotPassword />} />
          {/* prettier-ignore */}
          <Route exact path={verify.phoneNumber} element={<VerifyPhoneNumber />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Auth;
