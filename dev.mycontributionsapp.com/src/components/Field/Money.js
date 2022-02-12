import React from "react";
import NumberFormat from "react-number-format";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import { DefaultWrapper, FloatWrapper } from "./Wrapper";
import ErrorBoundaryComponent from "../ErrorBoundary";

const propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func,
};

const defaultProps = {
  withFormik: true,
  setFieldTouched: () => {},
};

const Money = ({
  name,
  float,
  label,
  value,
  currency,
  withFormik,
  placeholder,
  setFieldValue,
  setFieldTouched,
  wrapperClassName,
  containerClassName,
  ...props
}) => {
  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;

  return (
    <ErrorBoundaryComponent>
      <Parent
        {...{ name, label, withFormik, wrapperClassName, containerClassName }}
      >
        <NumberFormat
          type="tel"
          decimalScale={2}
          fixedDecimalScale
          allowNegative={false}
          thousandSeparator=","
          customInput={Form.Control}
          suffix={currency ? ` ${currency}` : ""}
          onValueChange={({ floatValue }) => {
            setFieldValue(name, floatValue);
            setTimeout(() => setFieldTouched(name, true));
          }}
          {...{ name, value, placeholder, ...props }}
        />
      </Parent>
    </ErrorBoundaryComponent>
  );
};

Money.propTypes = propTypes;
Money.defaultProps = defaultProps;

/**
 * export functions
 */
export default Money;
