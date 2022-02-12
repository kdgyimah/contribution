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

const Hexagon = ({ size, color, ...props }) => (
  <svg
    y="0px"
    x="0px"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667    c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128    c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"
      className="active-path"
      fill={color}
    />
  </svg>
);

Hexagon.propTypes = propTypes;
Hexagon.defaultProps = defaultProps;

export default Hexagon;
