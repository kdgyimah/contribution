import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div id="app">
          <div id="containerbar" class="containerbar authenticate-bg">
            <div class="container">
              <div class="auth-box login-box center">
                <div class="row no-gutters align-items-center justify-content-center">
                  <div class="auth-box-right">
                    <div class="card">
                      <div class="card-body">
                        <div class="form-head">
                          <a href="#" class="logo">
                            <img
                              src="assets/img/logo177.png"
                              alt="logo"
                              class="img-fluid"
                            />
                          </a>
                        </div>

                        <form>
                          <h4 class="form-title">Log in !</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="phone"
                              required
                              class="form-control"
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="password"
                              placeholder="password"
                              minlength="8"
                              required
                              class="form-control"
                            />
                          </div>
                          <button class="btn">log in</button>

                          <div class="form-row">
                            <div class="forgot-psw">
                              <a href="#">Forgot Password?</a>
                            </div>
                          </div>
                          <p class="sign-up">
                            Don't have an account?
                            <a href="#"> Sign Up</a>
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
