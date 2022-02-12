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
   * Set check of Radio
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

const Radio = ({ size, color, checked, ...props }) => (
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
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <circle cx="12" cy="12" r="5" />
      </Fragment>
    ) : (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </Fragment>
    )}
  </svg>
);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
