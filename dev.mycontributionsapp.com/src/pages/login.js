import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div id="app">
          <div id="containerbar" className="containerbar authenticate-bg">
            <div className="container">
              <div className="auth-box login-box center">
                <div className="row no-gutters align-items-center justify-content-center">
                  <div className="auth-box-right">
                    <div className="card">
                      <div className="card-body">
                        <div className="form-head">
                          <a href="/" className="logo">
                            <img
                              src="assets/img/logo177.png"
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
                            <div className="forgot-psw">
                              <a href="#forgot-password">Forgot Password?</a>
                            </div>
                          </div>
                          <p className="sign-up">
                            Don't have an account?
                            <a href="#sign-up"> Sign Up</a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
