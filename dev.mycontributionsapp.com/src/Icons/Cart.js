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
  size: 24,
  variant: null,
  color: "var(--navy)",
};

const Cart = ({ size, color, variant, ...props }) => (
  <svg
    width={size}
    fill={color}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "active" ? (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.00003 2C6.89546 2 6.00003 2.89543 6.00003 4V5H5.15979C3.99477 5 3.07632 5.99181 3.16568 7.1534L3.71594 14.3068C3.87625 16.3908 5.61401 18 7.70416 18H16.2959C18.3861 18 20.1238 16.3908 20.2841 14.3068L20.8344 7.15339C20.9237 5.9918 20.0053 5 18.8403 5H18V4C18 2.89543 17.1046 2 16 2H8.00003ZM16 5V4H8.00003V5H16ZM5.15979 7H18.8403L18.29 14.1534C18.2099 15.1954 17.341 16 16.2959 16H7.70416C6.65908 16 5.7902 15.1954 5.71005 14.1534L5.15979 7ZM11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21ZM16 23C17.1046 23 18 22.1046 18 21C18 19.8954 17.1046 19 16 19C14.8954 19 14 19.8954 14 21C14 22.1046 14.8954 23 16 23Z"
          fill={color}
        />
        <circle
          r="4"
          cy="5"
          cx="19"
          fill="var(--cinnabar)"
          stroke="white"
          strokeWidth="2"
        />
      </Fragment>
    ) : (
      <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </>
    )}
  </svg>
);

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
