import React, { useDispatch } from "reactn";
import Button from "Components/Button";

const Dashboard = () => {
  /**
   * dispatcher
   */
  const logout = useDispatch("auth.logout");

  return (
    <div id="authenticate-page" className="authenticate-bg">
      <div className="container">
        <div className="row no-gutters align-items-center justify-content-center">
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
              Dashboard
              <Button
                type="submit"
                color="#fff"
                bg="var(--black)"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
