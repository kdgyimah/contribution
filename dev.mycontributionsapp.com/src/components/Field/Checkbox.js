import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckboxIcon from "../../Icons/Checkbox";

const propTypes = {
  /**
   * onChange to handle change of checked values
   */
  onChange: PropTypes.func,
  /**
   * whether item is checked or not
   */
  checked: PropTypes.bool.isRequired,

  disabled: PropTypes.bool,
  /**
   * Set variant of checkbox
   *
   * @type {('circle'|'square')}
   */
  type: PropTypes.oneOf(["checkbox", "radio"]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  contentClassName: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  type: "checkbox",
  onChange: () => {},
};

const Checkbox = ({
  type,
  checked,
  onChange,
  children,
  disabled,
  contentClassName,
  ...props
}) => {
  /**
   * variable
   */
  type = (() => {
    switch (type) {
      case "radio":
        return "circle";
      default:
        return "square";
    }
  })();

  return (
    <Wrapper
      onClick={() => !disabled && onChange(!checked)}
      {...{ ...props, disabled }}
    >
      <CheckboxIcon
        variant={type}
        checked={checked}
        disabled={disabled}
        color={checked ? "var(--clear-blue)" : "var(--cloudy-blue)"}
      />
      <div className={`checkbox__content ${contentClassName}`}>{children}</div>
    </Wrapper>
  );
};

/**
 * style
 */
const Wrapper = styled.div`
  gap: 1rem;
  user-select: none;
  display: inline-grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  .checkbox__content {
    margin: auto 0;
  }
`;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default React.memo(Checkbox);
