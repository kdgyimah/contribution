import React, { Suspense, useGlobal, Fragment, lazy } from "reactn";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import VerifyPhoneNumber from "./Views/Auth/VerifyPhoneNumber";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import PasswordReset from "./Views/Auth/PasswordReset";
import EmailVerify from "./Views/Auth/EmailVerify";
import VerifyEmail from "./Views/Auth/VerifyEmail";
import Fallback from "./Components/Fallback";
import SignUp from "./Views/Auth/SignUp";
import Login from "./Views/Auth/Login";

const Dashboard = lazy(() => import("./Views/Dashboard"));

const Main = () => {
  /**
   * state
   */
  const [token] = useGlobal("token");

  /**
   * variables
   */
  const { login, signup, passwordReset, verify, forgotPassword } =
    namedRoutes.auth;

  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<Fallback>Loading App</Fallback>}>
          <Routes>
            {token && <Route path="/dashboard" element={<Dashboard />} />}
            {/* Auth */}
            <Route path={login} element={<Login />} />
            <Route exact path={signup} element={<SignUp />} />
            <Route exact path={verify.email} element={<VerifyEmail />} />
            <Route exact path={passwordReset} element={<PasswordReset />} />
            <Route exact path={verify.emailVerify} element={<EmailVerify />} />
            <Route exact path={forgotPassword} element={<ForgotPassword />} />
            {/* prettier-ignore */}
            <Route exact path={verify.phoneNumber} element={<VerifyPhoneNumber />} />

            {/* not found */}
            <Route path="*" element={<Navigate replace to={login} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

/**
 * namedApp
 *
 * Central routing system
 */

export const namedRoutes = {
  auth: {
    index: "/auth",
    login: "/auth/login",
    signup: "/auth/signup",
    passwordReset: "/auth/password-reset",
    forgotPassword: "/auth/forgot-password",
    verify: {
      email: "/auth/verify-email",
      phoneNumber: "/auth/verify-phone",
      emailVerify: "/auth/verify-email/:id",
    },
  },
  dashboard: {
    index: "/dashboard",
    groups: {
      index: "/dashboard/groups",
      create: "/dashboard/groups/create",
      contributions: "/dashboard/groups/contributions",
    },
    members: {
      index: "/dashboard/members",
      tab: "/dashboard/members/:tab?/:id?",
      payment: "/dashboard/members/:tab/payment",
    },
    reports: {
      index: "/dashboard/reports",
      payment: "/dashboard/reports/payment",
    },
    orders: {
      index: "/dashboard/orders",
      tab: "/dashboard/orders/:tab?/:id?",
    },
    account: {
      index: "/dashboard/account",
      tab: "/dashboard/account/:tab?",
    },
  },
};

export default Main;
