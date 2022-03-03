import React, { Fragment,  useDispatch, useEffect, useGlobal } from "reactn"; // prettier-ignore
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import { object } from "yup";
import * as schema from "Utils/schema";
import Button from "Components/Button";
import Field from "Components/Field";

import { loginService } from "Services/authService";
import { namedRoutes } from "../../Routes";
import Form from "react-bootstrap/Form";

const Login = () => {
  /**
   * states
   */
  const [token] = useGlobal("token");

  /**
   * hook
   */
  const navigate = useNavigate();

  /**
   * dispatch
   *
   * used to setup global cookie and state for token
   */
  const loginDispatcher = useDispatch("auth.login"); // login dispatcher. Set login information

  const handleSubmit = (params, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    console.log(params, setSubmitting, "handleSubmit");

    loginService(params)
      .then(({ user, ...response }) => {
        loginDispatcher(response);

        // if (!user?.email_verified_at) {
        //   return navigate(namedRoutes.auth.verify.email);
        // }
        // if (!(user?.default_phone_id && user?.default_phone)) {
        //   return navigate(namedRoutes.auth.verify.phoneNumber);
        // }
        return navigate(namedRoutes.dashboard.index);
      })
      .catch((error) =>
        setErrors({ password: error.message || "Invalid Login Credentials." }),
      )
      .finally(() => setSubmitting(false));
  };

  // when token is set, redirect to the dashboard
  useEffect(() => {
    if (token) {
      navigate(namedRoutes.dashboard.index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="authenticate-page" className="authenticate-bg">
      <div className="container">
        <div className="row no-gutters align-items-center justify-content-center">
          <div className="card">
            <div className="card-body">
              <div className="form-head">
                <a href="/" className="logo">
                  <img
                    src="/assets/img/logo177.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>

              <Fragment>
                <Formik
                  validateOnMount
                  validationSchema={object({
                    phone: schema.requirePhoneNumber("Phone Number"),
                    password: schema
                      .requireString("Password")
                      .min(8, "Password must be a minimum of 8 characters"),
                  })}
                  initialValues={{
                    phone: "",
                    password: "",
                  }}
                  onSubmit={(params, actions) => handleSubmit(params, actions)}
                >
                  {({
                    isValid,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    setFieldTouched,
                    values,
                  }) => (
                    <Form>
                      <h4 className="form-title">Log in !</h4>

                      <div className="form-group">
                        <Field.Phone
                          label=""
                          type="phone"
                          name="phone"
                          className="mb-0"
                          toggleClassName="mb-0 toggleClassName"
                          wrapperClassName="mb-0"
                          defaultCountry="GH"
                          onlyCountries={["GH", "NG"]}
                          value={values?.phone}
                          aria-required="true"
                          placeholder="phone"
                          {...{
                            setFieldValue,
                            setFieldTouched,
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          name="password"
                          value={values?.password}
                          aria-required="true"
                          placeholder="password"
                        />
                      </div>

                      <Button
                        type="submit"
                        color="#fff"
                        bg="var(--black)"
                        isValid={isValid}
                        isSubmitting={isSubmitting}
                        onClick={handleSubmit}
                        className="w-100"
                      >
                        Log in
                      </Button>

                      <div className="form-row">
                        <div className="ml-auto">
                          <Link to={namedRoutes.auth.forgotPassword}>
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      <p className="sign-up">
                        Don't have an account?{" "}
                        <Link to={namedRoutes.auth.signup}>Sign Up</Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
