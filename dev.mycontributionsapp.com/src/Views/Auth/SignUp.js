import React, { Fragment, useEffect, useGlobal } from "reactn";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { object } from "yup";
import * as schema from "Utils/schema";
import Button from "Components/Button";
import Field from "Components/Field";

import { registerService } from "Services/authService";
import { namedRoutes } from "../../Routes";
import Form from "react-bootstrap/Form";
import Notify from "Components/Notify";

const SignUp = () => {
  /**
   * states
   */
  const [token] = useGlobal("token");

  /**
   * hook
   */
  const navigate = useNavigate();

  const handleSubmit = (params, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    console.log(params, setSubmitting, "handleSubmit");

    registerService(params)
      .then(({ user, ...response }) => {
        toast(
          <Notify
            body="Account created successfully. Please login to continue."
            type="success"
          />,
        );

        return navigate(namedRoutes.auth.login);
      })
      .catch((error) =>
        setErrors({
          name: error?.fields?.name[0],
          phone: error?.fields?.phone[0],
          password:
            error?.fields?.password[0] ||
            error?.message ||
            "Unable to create account. Please reload and try again.",
        }),
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
                    src="/assets/img/logo-main.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>

              <Fragment>
                <Formik
                  validateOnMount
                  validationSchema={object({
                    name: schema
                      .requireString("Name")
                      .min(3, "Name must be a minimum of 2 characters"),
                    phone: schema.requirePhoneNumber("Phone Number"),
                    password: schema
                      .requireString("Password")
                      .min(8, "Password must be a minimum of 8 characters"),
                  })}
                  initialValues={{
                    name: "",
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
                      <h4 className="form-title">Sign Up !</h4>

                      <div className="form-group">
                        <Field
                          type="name"
                          name="name"
                          value={values?.name}
                          aria-required="true"
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-group">
                        <Field.Phone
                          label=""
                          type="phone"
                          name="phone"
                          className="mb-0"
                          toggleClassName="mb-0 toggleClassName"
                          wrapperClassName="mb-0"
                          defaultCountry="GH"
                          // onlyCountries={["GH", "NG"]}
                          onlyCountries={["GH"]}
                          value={values?.phone}
                          aria-required="true"
                          placeholder="Phone"
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
                          placeholder="Password (8 chars min)"
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
                        Sign up
                      </Button>

                      <p className="sign-up">
                        Have an account already?{" "}
                        <Link to={namedRoutes.auth.login}>Log in</Link>
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

export default SignUp;
