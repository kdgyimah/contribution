import React from "react";
import { Link } from "react-router-dom";
import { namedRoutes } from "../../Routes";

const Login = () => {
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
                <h4 className="form-title">Log in !</h4>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="phone"
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password"
                    minLength="8"
                    required
                    className="form-control"
                  />
                </div>
                <button className="btn">log in</button>

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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
