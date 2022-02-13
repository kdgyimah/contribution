import React, { useGlobal, useDispatch, Fragment } from "reactn";
import { AuthProvider, AppProvider } from "Providers";

import Routes from "./Routes";

function App() {
  /**
   * state
   */
  const [token, setToken] = useGlobal("token");

  /**
   * dispatcher
   */
  const logout = useDispatch("auth.logout");

  return (
    <Fragment>
      <AppProvider>
        <AuthProvider {...{ token, setToken, logout }}>
          <Routes />
        </AuthProvider>
      </AppProvider>
    </Fragment>
  );
}

export default App;
