import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * @default '18'
   */
  size: PropTypes.number,

  /**
   * @default '#000'
   */
  color: PropTypes.string,
};

const defaultProps = {
  size: 18,
  color: "var(--navy)",
};

const Copy = ({ size, color, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.625 0.75H3.375C2.55 0.75 1.875 1.425 1.875 2.25V12C1.875 12.4125 2.2125 12.75 2.625 12.75C3.0375 12.75 3.375 12.4125 3.375 12V3C3.375 2.5875 3.7125 2.25 4.125 2.25H11.625C12.0375 2.25 12.375 1.9125 12.375 1.5C12.375 1.0875 12.0375 0.75 11.625 0.75ZM14.625 3.75H6.375C5.55 3.75 4.875 4.425 4.875 5.25V15.75C4.875 16.575 5.55 17.25 6.375 17.25H14.625C15.45 17.25 16.125 16.575 16.125 15.75V5.25C16.125 4.425 15.45 3.75 14.625 3.75ZM7.125 15.75H13.875C14.2875 15.75 14.625 15.4125 14.625 15V6C14.625 5.5875 14.2875 5.25 13.875 5.25H7.125C6.7125 5.25 6.375 5.5875 6.375 6V15C6.375 15.4125 6.7125 15.75 7.125 15.75Z"
      fill={color}
    />
  </svg>
);

Copy.propTypes = propTypes;
Copy.defaultProps = defaultProps;

export default Copy;
