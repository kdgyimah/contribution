import React from "react";
import { Link } from "react-router-dom";
import { namedRoutes } from "../../Routes";

const ForgotPassword = () => {
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
                <h4 className="form-title">Reset Password!</h4>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="phone"
                    required
                    className="form-control"
                  />
                </div>

                <button className="btn">Send Reset Code</button>

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

export default ForgotPassword;
