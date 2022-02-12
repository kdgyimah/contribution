import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * @default '24'
   */
  size: PropTypes.number,

  /**
   * @default '#000'
   */
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Minus = ({ size, color, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19,13H5V11H19V13Z" />
  </svg>
);

Minus.propTypes = propTypes;
Minus.defaultProps = defaultProps;

export default Minus;
