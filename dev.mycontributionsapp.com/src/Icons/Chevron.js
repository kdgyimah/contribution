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
   * Set variant of chevron
   *
   * @type {('left'|'right'|'up'|'down')}
   */
  variant: PropTypes.oneOf(["left", "right", "up", "down"]),
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Chevron = ({ size, color, variant, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "left" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
      </Fragment>
    )}

    {variant === "right" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
      </Fragment>
    )}

    {variant === "up" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z" />
      </Fragment>
    )}

    {variant === "down" && (
      <Fragment>
        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
      </Fragment>
    )}
  </svg>
);

Chevron.propTypes = propTypes;
Chevron.defaultProps = defaultProps;

export default Chevron;
