import React from "react";
import { faEllipsisVertical, faArrowsRotate } from "@fortawesome/free-solid-svg-icons"; // prettier-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * icons
 * @returns {React.ReactElement}
 */
const moreIcon = <FontAwesomeIcon icon={faEllipsisVertical} />;
const refreshIcon = <FontAwesomeIcon icon={faArrowsRotate} />;

const DashboardHeader = (props) => {
  return (
    <div {...props} className="aqua-blue-bg">
      <div className="p-3 d-flex align-items-center justify-content-between p-2">
        <div className="d-flex align-items-center">
          <img
            src="assets/img/logo-main.png"
            alt="Logo"
            className="img-fluid mr-2"
          />
          <h5>MyContributions</h5>
        </div>

        <div className="d-flex align-items-center">
          <div className="mr-16">{refreshIcon}</div>
          <div>{moreIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
