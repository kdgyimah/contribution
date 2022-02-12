import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Btn from "react-bootstrap/Button";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * @default 'true'
   */
  isValid: PropTypes.bool,
  /**
   * @default 'default'
   */
  variant: PropTypes.oneOf(["default", "outline", "outline:white"]),
  /**
   * @default 'false'
   */
  isSubmitting: PropTypes.bool,
  /**
   * loading props for spinner
   */
  loader: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  /**
   * Button contents
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

const defaultProps = {
  isValid: true,
  variant: "default",
  isSubmitting: false,
  loader: { size: 25, color: "#fff" },
};

const Button = ({
  isSubmitting,
  children,
  variant,
  isValid,
  loader,
  value,
  type,
  ...props
}) => {
  switch (variant) {
    case "default":
      props = {
        ...props,
        color: "#fff",
        bg: "var(--default-green)",
        border: "var(--default-green)",
      };
      break;
    case "outline":
      props = {
        ...props,
        bg: "#fff",
        color: "var(--light-blue)",
        border: "var(--grey)",
      };
      break;
    case "outline:white":
      props = {
        ...props,
        bg: "transparent",
        color: "#fff",
        border: "#fff",
      };
      break;
    default:
      break;
  }

  return (
    <Wrapper
      variant="default"
      type={type || "button"}
      className="text-truncate"
      {...(!isValid && { disabled: true })}
      {...(isSubmitting && { disabled: true })}
      {...props}
    >
      {isSubmitting ? <ClipLoader {...loader} /> : children}
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled(Btn)`
  height: ${({ height }) => (height ? `${height * 0.0625}rem` : "3rem")};
  max-width: ${({ width }) => (width ? `${width * 0.0625}rem` : "100%")};
  ${({ border }) => border && `border-color: ${border};`};
  ${({ bg }) => bg && `background-color: ${bg};`};
  ${({ color }) => color && `color: ${color};`};
  width: 100%;
`;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
