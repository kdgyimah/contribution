import React from "react";
import { Link } from "react-router-dom";
import { namedRoutes } from "../../Routes";

const SignUp = () => {
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

              <form>
                <h4 className="form-title">Sign Up !</h4>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    required
                    name="phone"
                    type="phone"
                    minLength="8"
                    placeholder="phone"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    required
                    minLength="8"
                    type="password"
                    className="form-control"
                    placeholder="password (8 chars min)"
                  />
                </div>
                <button className="btn">Sign up</button>

                {/* <div className="form-row">
                  <div className="ml-auto">
                    <Link to={namedRoutes.auth.forgotPassword}>
                      Forgot Password?
                    </Link>
                  </div>
                </div> */}
                <p className="sign-up">
                  Have an account already?{" "}
                  <Link to={namedRoutes.auth.login}>Log in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
