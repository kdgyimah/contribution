import React from "react";
import { Field as FormikField } from "formik";
import PropTypes from "prop-types";

import { FloatWrapper, DefaultWrapper } from "./Field/Wrapper";
import ErrorBoundaryComponent from "./ErrorBoundary";
import CountriesField from "./Field/Countries";
import CheckboxField from "./Field/Checkbox";
import PasswordField from "./Field/Password";
import PhoneField from "./Field/PhoneInput";
import ErrorMessage from "./Field/Error";
import SwitchField from "./Field/Switch";
import MoneyField from "./Field/Money";
import RadioField from "./Field/Radio";
import DateField from "./Field/Date";
import OtpField from "./Field/Otp";

/**
 * props definition
 */
const propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  containerClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  withFormik: PropTypes.bool,
  postfix: PropTypes.node,
  prefix: PropTypes.node,
  children: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any,
};

const defaultProps = {
  type: "text",
  withFormik: true,
  component: FormikField,
};

const Field = ({
  containerClassName,
  wrapperClassName,
  labelClassName,
  withFormik,
  className,
  component,
  postfix,
  prefix,
  float,
  label,
  name,
  as,
  ...props
}) => {
  /**
   * variables
   */
  const Input = component;
  const Parent = float ? FloatWrapper : DefaultWrapper;

  return (
    <ErrorBoundaryComponent>
      <Parent
        {...{
          name,
          label,
          prefix,
          postfix,
          withFormik,
          labelClassName,
          wrapperClassName,
          containerClassName,
          ...props,
        }}
      >
        <Input
          name={name}
          id={props?.id || name}
          className={className || "form-control"}
          {...(as && typeof as === "function" ? { component: as } : { as })}
          {...props}
        />
      </Parent>
    </ErrorBoundaryComponent>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Object.assign(Field, {
  Countries: CountriesField,
  Checkbox: CheckboxField,
  Password: PasswordField,
  Switch: SwitchField,
  Error: ErrorMessage,
  Money: MoneyField,
  Phone: PhoneField,
  Radio: RadioField,
  Date: DateField,
  Otp: OtpField,
});
