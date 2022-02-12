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
   * @default null
   */
  variant: PropTypes.oneOf(["active", "default"]),
};

const defaultProps = {
  size: 33,
  variant: "active",
  color: "var(--navy)",
};

const Pending = ({ size, color, variant, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "active" ? (
      <Fragment>
        <path
          d="M31.25 16.5C31.25 24.7843 24.5343 31.5 16.25 31.5C7.96573 31.5 1.25 24.7843 1.25 16.5C1.25 8.21573 7.96573 1.5 16.25 1.5C24.5343 1.5 31.25 8.21573 31.25 16.5Z"
          fill="#DFE2E6"
          stroke="#DFE2E6"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 25.5C21.2206 25.5 25.25 21.4706 25.25 16.5C25.25 11.5294 21.2206 7.5 16.25 7.5C11.2794 7.5 7.25 11.5294 7.25 16.5C7.25 21.4706 11.2794 25.5 16.25 25.5Z"
          fill="#C0C6CE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 20.5C18.4591 20.5 20.25 18.7091 20.25 16.5C20.25 14.2909 18.4591 12.5 16.25 12.5C14.0409 12.5 12.25 14.2909 12.25 16.5C12.25 18.7091 14.0409 20.5 16.25 20.5Z"
          fill="#F7F8FA"
        />
      </Fragment>
    ) : (
      <>
        <path
          d="M31.25 16.5C31.25 24.7843 24.5343 31.5 16.25 31.5C7.96573 31.5 1.25 24.7843 1.25 16.5C1.25 8.21573 7.96573 1.5 16.25 1.5C24.5343 1.5 31.25 8.21573 31.25 16.5Z"
          fill="var(--light-periwinkle)"
          stroke="var(--light-periwinkle)"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 25.5C21.2206 25.5 25.25 21.4706 25.25 16.5C25.25 11.5294 21.2206 7.5 16.25 7.5C11.2794 7.5 7.25 11.5294 7.25 16.5C7.25 21.4706 11.2794 25.5 16.25 25.5Z"
          fill="var(--cloudy-blue)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 20.5C18.4591 20.5 20.25 18.7091 20.25 16.5C20.25 14.2909 18.4591 12.5 16.25 12.5C14.0409 12.5 12.25 14.2909 12.25 16.5C12.25 18.7091 14.0409 20.5 16.25 20.5Z"
          fill="var(--pale-grey-four)"
        />
      </>
    )}
  </svg>
);

Pending.propTypes = propTypes;
Pending.defaultProps = defaultProps;

export default Pending;
