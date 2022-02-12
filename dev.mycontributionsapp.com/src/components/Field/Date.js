import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import { DefaultWrapper, FloatWrapper } from "./Wrapper";
import ErrorBoundaryComponent from "../ErrorBoundary";

/**
 * picker prop definition
 */
const dateProps = PropTypes.oneOfType([
  PropTypes.instanceOf(Date),
  PropTypes.string,
]);

const pickerPropTypes = {
  setFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  withFormik: PropTypes.bool,
  format: PropTypes.string,
  label: PropTypes.string,
  minDate: dateProps,
  maxDate: dateProps,
  value: dateProps.isRequired,
};

const pickerDefaultProps = {
  value: "",
  placeholder: "",
  withFormik: true,
  setFieldValue: () => {},
};

/**
 * date picker
 *
 * @param {*} name form name for datepicker
 * @param {*} label label for form input
 * @param {*} value value for form input
 * @param {*} format date format
 * @param {*} maxDate max date the picker should accept
 * @param {*} minDate min date the picker should accept
 * @param {*} withFormik use with formik
 * @param {*} placeholder self explanatory
 * @param {*} setFieldValue function to set the date in formik
 */
const Picker = ({
  name,
  float,
  label,
  range,
  value,
  format,
  maxDate,
  minDate,
  withFormik,
  placeholder,
  setFieldValue,
  setFieldTouched,
  wrapperClassName,
  containerClassName,
  ...props
}) => {
  /**
   * state
   */
  const [active, setActive] = useState(false);

  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;
  const date = value ? new Date(value) : "";

  /**
   * effect
   */
  useEffect(() => {
    if (!active && value) {
      setActive(true);
    }
  }, [value]);

  return (
    <ErrorBoundaryComponent>
      <Parent
        labelClassName={active && "active"}
        {...{ name, label, withFormik, wrapperClassName, containerClassName }}
      >
        <ReactDatePicker
          selected={date}
          showYearDropdown
          showMonthDropdown
          className="form-control"
          placeholderText={placeholder}
          onFocus={() => setActive(true)}
          onBlur={() => {
            setFieldTouched(name, true);
            if (!value) setActive(false);
          }}
          onChange={(value) =>
            setFieldValue(
              name,
              value ? dayjs(value).format(format || "YYYY-MM-DD") : "",
            )
          }
          {...(maxDate && { maxDate: dayjs(maxDate).toDate() })}
          {...(minDate && { minDate: dayjs(minDate).toDate() })}
          {...props}
        />
      </Parent>
    </ErrorBoundaryComponent>
  );
};

Picker.propTypes = pickerPropTypes;
Picker.defaultProps = pickerDefaultProps;

/**
 * export functions
 */
export default Picker;
