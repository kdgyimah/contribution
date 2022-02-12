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
   * Set variant of Trending
   *
   * @type {('up'|'down')}
   */
  variant: PropTypes.oneOf(["up", "down"]),
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Trending = ({ size, color, variant, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "up" && (
      <Fragment>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29c-.39-.39-1.02-.39-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z" />
      </Fragment>
    )}

    {variant === "down" && (
      <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" />
      </Fragment>
    )}
  </svg>
);

Trending.propTypes = propTypes;
Trending.defaultProps = defaultProps;

export default Trending;
