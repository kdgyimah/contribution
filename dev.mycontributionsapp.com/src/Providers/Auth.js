import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import cookie from "../Utils/cookie";

const propTypes = {
  /**
   * local token for each app
   */
  token: PropTypes.any,
  /**
   * local logout function
   */
  logout: PropTypes.func.isRequired,
  /**
   * local token setter function
   */
  setToken: PropTypes.func.isRequired,
  /**
   * content of page
   */
  children: PropTypes.any,
};

const defaultProps = {
  setToken: () => {},
  logout: () => {},
};

const Auth = ({ token, logout, setToken, children }) => {
  /**
   * functions
   */
  const handleAuth = useCallback(() => {
    const globalToken = cookie().getCookie("token");

    if (globalToken) {
      if (globalToken !== token) {
        return setToken(globalToken);
      }
    } else {
      if (token) {
        logout();
      }
    }
  }, [logout, token, setToken]);

  /**
   * effect
   */
  useEffect(() => {
    handleAuth();

    const interval = setInterval(() => {
      handleAuth();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleAuth]);

  return children;
};

Auth.propTypes = propTypes;
Auth.defaultProps = defaultProps;

export default React.memo(Auth);
