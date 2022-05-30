import React, { useDispatch } from "reactn";

import DashboardHeader from "./Dashboard/Components/DashboardHeader";
import DashboardTabs from "./Dashboard/Components/DashboardTabs";

const Dashboard = () => {
  /**
   * dispatcher
   */
  const logout = useDispatch("auth.logout");

  return (
    <div id="dashboard-page" className="authenticate-bg">
      <DashboardHeader />
      <DashboardTabs {...{ logout }} />
    </div>
  );
};

export default Dashboard;
