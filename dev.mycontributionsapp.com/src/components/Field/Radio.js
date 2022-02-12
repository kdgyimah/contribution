import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RadioIcon from "../../Icons/Radio";

const propTypes = {
  /**
   * onChange to handle change of checked values
   */
  onChange: PropTypes.func,
  /**
   * whether item is checked or not
   */
  checked: PropTypes.bool.isRequired,
  /**
   * disabled state
   */
  disabled: PropTypes.bool,
  /**
   * children | content
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

const defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

const Radio = ({ checked, onChange, children, disabled, ...props }) => (
  <Wrapper
    onClick={() => !disabled && !checked && onChange(!checked)}
    {...{ ...props, disabled }}
  >
    <RadioIcon
      checked={checked}
      disabled={disabled}
      color={checked ? "var(--clear-blue)" : "var(--bluey-grey)"}
    />
    <div className="radio__content">{children}</div>
  </Wrapper>
);

/**
 * style
 */
const Wrapper = styled.div`
  gap: 1rem;
  cursor: pointer;
  user-select: none;
  display: inline-grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default React.memo(Radio);
