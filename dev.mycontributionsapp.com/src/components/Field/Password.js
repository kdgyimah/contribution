import React, { useState } from "react";
import { passwordStrength } from "check-password-strength";
import { Field } from "formik";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DefaultWrapper, FloatWrapper } from "./Wrapper";
import ErrorBoundaryComponent from "../ErrorBoundary";
import VisibilityIcon from "../../Icons/Visibility";
import ErrorMessage from "./Error";

const propTypes = {
  float: PropTypes.bool,
  withFormik: PropTypes.bool,
  placeholder: PropTypes.string,
  withVisibility: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  float: false,
  placeholder: "",
  withFormik: true,
  withVisibility: true,
};

const Password = ({
  name,
  float,
  label,
  value,
  withFormik,
  placeholder,
  withVisibility,
  wrapperClassName,
  containerClassName,
}) => {
  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;
  const strength = passwordStrength(value).id;

  /**
   * states
   */
  const [visible, setVisible] = useState(false);

  return (
    <div className={wrapperClassName || "mb-6"}>
      <ErrorBoundaryComponent>
        <Parent
          wrapperClassName="mb-4"
          {...(withVisibility && {
            postfix: (
              <VisibilityWrapper onClick={() => setVisible(!visible)}>
                <VisibilityIcon
                  {...(visible
                    ? { color: "var(--clear-blue)", variant: "off" }
                    : { color: "var(--bluey-grey)", variant: "on" })}
                />
              </VisibilityWrapper>
            ),
          })}
          {...{ name, label, containerClassName }}
        >
          <Field
            className="form-control pe-0"
            type={visible ? "text" : "password"}
            {...{ name, value, placeholder }}
          />
        </Parent>
        <Meter strength={value ? strength + 1 : 0} />
        {withFormik && (
          <ErrorMessage
            name={name}
            style={{ fontSize: "0.75rem" }}
            className="mt-1 bluey-grey-text"
          />
        )}
      </ErrorBoundaryComponent>
    </div>
  );
};

/**
 * styles
 */
const VisibilityWrapper = styled.span`
  display: block;
  cursor: pointer;
  padding: 0rem 1rem;
`;

const Meter = styled.span`
  display: block;
  position: relative;
  border-radius: 0.25rem;
  border: solid 0.125rem var(--pale-grey-three);

  &::before,
  &::after {
    content: " ";
    display: block;
    height: 0.25rem;
  }

  &::before {
    border-radius: 0.25rem;
    background: linear-gradient(
      to right,
      var(--reddish),
      var(--mango) 51%,
      var(--dark-mint)
    );
  }

  &::after {
    top: 0;
    right: 0;
    position: absolute;
    transition: ease-in-out 0.25s width;
    background-color: var(--pale-grey-three);
    width: ${({ strength }) => `${100 - strength * 25}%`};
  }
`;

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;

export default Password;
