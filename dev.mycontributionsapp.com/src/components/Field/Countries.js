import React from "react";
import { Field } from "formik";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";

import { DefaultWrapper } from "./Wrapper";
import Select from "../Select";

const propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func,
};

const defaultProps = {
  setFieldValue: () => {},
  setFieldTouched: () => {},
};

const Countries = ({
  name,
  value,
  options,
  onChange,
  placeholder,
  setFieldValue,
  setFieldTouched,
  ...props
}) => {
  /**
   * variable
   */
  options = ((options) => {
    return options.map(({ label, value }) => ({
      value,
      label,
    }));
  })(options || countryList().getData());

  return (
    <DefaultWrapper {...{ ...props, name, value, withFormik: true }}>
      <Field
        options={options}
        component={Select}
        onBlur={() => setFieldTouched(name, true)}
        {...(onChange
          ? { onChange }
          : { onChange: ({ value }) => setFieldValue(name, value) })}
        {...{ name, value, placeholder }}
      />
    </DefaultWrapper>
  );
};

Countries.propTypes = propTypes;
Countries.defaultProps = defaultProps;

export default Countries;
