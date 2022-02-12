import React, { Fragment } from "react";
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

  /**
   * Set check of Toggle
   *
   * @default 'false'
   * @type {('true'|'false')}
   */
  checked: PropTypes.bool,
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
  checked: false,
};

const Toggle = ({ size, color, checked, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {checked ? (
      <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </Fragment>
    ) : (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </Fragment>
    )}
  </svg>
);

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
