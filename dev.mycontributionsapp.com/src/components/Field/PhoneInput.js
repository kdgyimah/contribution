import React, { useState } from "react";
import { getCountries, formatPhoneNumberIntl } from "react-phone-number-input";
import { Field } from "formik";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import flags from "emoji-flags";
import Phone from "react-phone-number-input/input";

import { DefaultWrapper, FloatWrapper } from "./Wrapper";
import ErrorBoundaryComponent from "../ErrorBoundary";
import FlagComponent from "../Flag";
import ChevronIcon from "../../Icons/Chevron";

/**
 * props definition
 */
const propTypes = {
  float: PropTypes.bool,
  withFormik: PropTypes.bool,
  placeholder: PropTypes.string,
  onlyCountries: PropTypes.array,
  defaultCountry: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

const defaultProps = {
  float: false,
  placeholder: "",
  withFormik: true,
  label: "Phone number",
  setFieldValue: () => {},
  setFieldTouched: () => {},
};

const PhoneInput = ({
  name,
  float,
  label,
  value,
  withFormik,
  placeholder,
  onlyCountries,
  setFieldValue,
  defaultCountry,
  setFieldTouched,
  wrapperClassName,
  toggleClassName,
  containerClassName,
}) => {
  /**
   * states
   */
  const [country, setCountry] = useState(defaultCountry?.toUpperCase());

  /**
   * functions
   */
  const handleCountries = () => {
    const selectedCountries = onlyCountries || getCountries();

    return selectedCountries
      .map((country) => {
        if (!country) return false;
        if (!flags.countryCode(country.toUpperCase())) return false;

        const countryName = countryList().getLabel(country.toUpperCase());

        if (countryName) {
          return {
            label: flags.countryCode(country.toUpperCase())?.emoji,
            value: countryName,
            country,
          };
        }

        return {};
      })
      .filter((e) => e)
      .sort((a, b) => {
        const nameA = a?.value?.toUpperCase();
        const nameB = b?.value?.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
  };

  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;

  return (
    <ErrorBoundaryComponent>
      <Parent
        prefix={
          <Dropdown>
            <Toggle className={toggleClassName}>
              <FlagComponent code={country} style={{ marginTop: "0.125rem" }} />
              <ChevronIcon variant="down" size={20} />
            </Toggle>
            <Menu>
              {handleCountries().map(({ label, value, ...others }, key) => {
                if (!label || !value) return false;

                return (
                  <Dropdown.Item
                    key={key}
                    className={
                      country?.toLowerCase() === others?.country?.toLowerCase()
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setCountry(others.country) |
                      setFieldValue("country", others.country) |
                      setFieldValue(name, "")
                    }
                  >
                    <span role="img" aria-label={others.country}>
                      {label}
                    </span>
                    <span className="ml-1">{value}</span>
                  </Dropdown.Item>
                );
              })}
            </Menu>
          </Dropdown>
        }
        {...{ name, label, withFormik, wrapperClassName, containerClassName }}
      >
        <Field
          international
          component={Phone}
          withCountryCallingCode
          className="form-control"
          onBlur={() => setFieldTouched(name, true)}
          onChange={(value) =>
            setFieldValue(
              name,
              formatPhoneNumberIntl(value)?.replace(/\s/g, ""),
            )
          }
          {...(country && { country })}
          {...{ name, value, placeholder }}
        />
      </Parent>
    </ErrorBoundaryComponent>
  );
};

/**
 * styles
 */

const Toggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
  padding: 0 0 0 1rem;
  border: none;
  gap: 0rem;

  span {
    font-size: 1.5rem;
  }
`;

const Menu = styled(Dropdown.Menu)`
  max-height: 25rem;
  overflow-y: auto;

  .dropdown-item {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;

export default React.memo(PhoneInput);
