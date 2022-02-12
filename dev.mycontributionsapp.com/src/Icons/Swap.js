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
   * Set direction of Swap
   *
   * @type {('vertical'|'horizontal')}
   */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),

  /**
   * Set direction of Swap
   *
   * @type {('default'|'circle')}
   */
  variant: PropTypes.oneOf(["default", "circle"]),
};

const defaultProps = {
  size: 24,
  color: "var(--navy)",
};

const Swap = ({ size, color, variant, direction, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "default" && (
      <Fragment>
        {direction === "vertical" && (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z" />
          </Fragment>
        )}

        {direction === "horizontal" && (
          <Fragment>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
          </Fragment>
        )}
      </Fragment>
    )}

    {variant === "circle" && (
      <Fragment>
        {direction === "vertical" && (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9H6.5zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5l-3.15 3.15z" />
          </Fragment>
        )}

        {direction === "horizontal" && (
          <Fragment>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z" />
          </Fragment>
        )}
      </Fragment>
    )}
  </svg>
);

Swap.propTypes = propTypes;
Swap.defaultProps = defaultProps;

export default Swap;
