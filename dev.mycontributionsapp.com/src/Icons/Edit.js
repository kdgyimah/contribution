import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Edit = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2929 4.29289C17.2357 3.35008 18.7643 3.35008 19.7071 4.29289C20.6499 5.2357 20.6499 6.7643 19.7071 7.70711L7.58579 19.8284C6.83564 20.5786 5.81822 21 4.75736 21H4C3.44772 21 3 20.5523 3 20V19.2426C3 18.1818 3.42143 17.1644 4.17157 16.4142L16.2929 4.29289ZM18.2929 5.70711C18.1311 5.54534 17.8689 5.54535 17.7071 5.7071L5.58579 17.8284C5.27242 18.1418 5.07378 18.5484 5.0169 18.9831C5.45156 18.9262 5.85821 18.7276 6.17157 18.4142L18.2929 6.29289C18.4547 6.13113 18.4547 5.86887 18.2929 5.70711ZM3 5C3 4.44771 3.44772 4 4 4H11C11.5523 4 12 4.44771 12 5C12 5.55228 11.5523 6 11 6H4C3.44772 6 3 5.55228 3 5ZM4 8C3.44772 8 3 8.44771 3 9C3 9.55228 3.44772 10 4 10H6C6.55228 10 7 9.55228 7 9C7 8.44771 6.55228 8 6 8H4Z"
      fill={color}
    />
  </svg>
);

Edit.propTypes = propTypes;
Edit.defaultProps = defaultProps;

export default Edit;
