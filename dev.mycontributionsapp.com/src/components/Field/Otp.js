import React from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";
import PropTypes from "prop-types";

import loopUtil from "../../Utils/loop";
import ErrorMessage from "./Error";

const propTypes = {
  value: PropTypes.string,
  withFormik: PropTypes.bool,
  numInputs: PropTypes.number,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

const defaultProps = {
  value: "",
  numInputs: 6,
  withFormik: false,
  setFieldValue: () => {},
  setFieldTouched: () => {},
};

/**
 * otp
 *
 * @param {*} value value for otp input
 * @param {*} numInputs number of OTP inputs to be rendered
 * @param {*} withFormik use with formik
 */

const Otp = ({
  name,
  value,
  numInputs,
  withFormik,
  setFieldValue,
  setFieldTouched,
  ...props
}) => {
  return (
    <Wrapper {...{ numInputs }}>
      <OtpInput
        isInputNum
        shouldAutoFocus
        {...{
          value,
          numInputs,
          inputStyle: "otp-input",
          containerStyle: "otp-container",
          placeholder: loopUtil(numInputs, "*"),
          onChange: (input) => {
            setFieldValue(name, input);

            if (input?.length === numInputs) {
              setTimeout(() => setFieldTouched(name, true));
            }
          },
          ...props,
        }}
      />
      {withFormik && (
        <ErrorMessage name={name} className="pale-red-text mt-2" />
      )}
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  .otp-container {
    gap: 0.5rem;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    display: grid !important;
    grid-template-columns: repeat(${({ numInputs }) => numInputs}, 1fr);
    max-width: ${({ numInputs }) => `${(numInputs * 48 + 8 * 5) * 0.0625}rem`};

    .otp-input {
      padding: 0;
      border: none;
      outline: none;
      line-height: 1;
      font-weight: 600;
      border-radius: 0;
      font-size: 2.5rem;
      width: 100% !important;
      font-family: var(--font-family-titillium);
      border-bottom: solid 1px var(--cloudy-blue);

      &:focus {
        border-color: var(--clear-blue);
      }

      &:not(:placeholder-shown) {
        border-color: var(--navy);
      }

      &:disabled {
        opacity: 0.65;
        background-color: transparent;
        border-color: var(--cloudy-blue);
      }

      &::placeholder {
        color: transparent;
      }
    }
  }
`;

Otp.propTypes = propTypes;
Otp.defaultProps = defaultProps;

export default Otp;
