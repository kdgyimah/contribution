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
   * Set variant of arrow
   *
   * @type {('downward'|'forward'|'upward'|'backward'|'dropdown')}
   */
  variant: PropTypes.oneOf([
    "upward",
    "forward",
    "backward",
    "downward",
    "dropdown",
  ]),
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Arrow = ({ size, color, variant, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "backward" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
      </Fragment>
    )}

    {variant === "downward" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z" />
      </Fragment>
    )}

    {variant === "forward" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
      </Fragment>
    )}

    {variant === "upward" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" />
      </Fragment>
    )}

    {variant === "dropdown" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" />
      </Fragment>
    )}
  </svg>
);

Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

export default Arrow;
