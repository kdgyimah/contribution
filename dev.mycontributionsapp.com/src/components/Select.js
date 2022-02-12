import React, { Fragment } from "react";
import ReactSelect, { components } from "react-select";
import PropTypes from "prop-types";
import styled from "styled-components";

import ErrorBoundary from "./ErrorBoundary";
import Chevron from "../Icons/Chevron";

/**
 * components
 */
const DropdownIndicator = ({ children, isFocused, hasValue, ...props }) => (
  <components.DropdownIndicator {...props}>
    <Chevron {...{ variant: isFocused && !hasValue ? "up" : "down" }} />
  </components.DropdownIndicator>
);

const Content = ({ data, ...props }) => (
  <div className="d-flex align-items-center x-spacing-2">
    {data?.avatar && (
      <Fragment>
        {data?.type === "url" && <Avatar avatar={data.avatar} />}
        {data?.type === "svg" && (
          <Avatar svg>
            <data.avatar width={24} height={24} />
          </Avatar>
        )}
      </Fragment>
    )}
    <p className="mb-0 fw-bold text-truncate">{data?.label}</p>
  </div>
);

/**
 * styles
 */
const styles = {
  container: (styles) => ({
    ...styles,
    padding: 0,
    width: "100%",
  }),
  control: (styles, { isDisabled }) => ({
    ...styles,
    borderColor: "transparent !important",
    backgroundColor: isDisabled ? "#e9ecef" : "transparent",
    opacity: isDisabled ? "0.65" : "1",
    borderRadius: "0.375rem",
    height: "2.875rem",
    boxShadow: "none",
  }),
  menuList: () => ({
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "auto",
    maxHeight: 200,
  }),
  menuPortal: (styles) => ({ ...styles, zIndex: 999 }),
  menu: (styles) => ({
    ...styles,
    boxShadow: "0 0.0625rem 0.375rem 0.0625rem rgb(6 31 60 / 12%)",
    border: "none !important",
    backgroundColor: "#fff",
    paddingBottom: "0.25rem",
    paddingTop: "0.25rem",
    zIndex: 999,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor:
      (isSelected && "var(--pale-grey)!important") || "#fff!important",
    padding: "0.625rem 1rem",
    fontSize: "0.875rem",
    color: "var(--navy)",
    cursor: "pointer",
    outline: "none",
  }),
  multiValue: (styles) => ({ ...styles, borderRadius: 4 }),
  multiValueLabel: (styles) => ({ ...styles, paddingLeft: 8, paddingRight: 8 }),
  multiValueRemove: (styles, { isHover }) => ({
    ...styles,
    "&:hover": {
      backgroundColor: "var(--pale-grey)",
      color: "var(--desert-storm)",
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    height: "100%",
    padding: "0rem 0.875rem",
  }),
  singleValue: (styles) => ({
    ...styles,
    width: "100%",
    cursor: "pointer",
    color: "var(--navy)",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--bluey-grey)",
    fontWeight: 400,
  }),
  indicatorsContainer: (styles) => ({ ...styles, cursor: "pointer" }),
};

/**
 * styled component styles
 */
const Avatar = styled.div`
  ${({ svg, avatar }) =>
    !svg &&
    `
      background-color: var(--athens-grey);
      background-image: url(${avatar});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 50%;
  `}
  flex: 0 0 1.5rem;
  height: 1.5rem;
`;

const SelectWrapper = styled(ReactSelect)`
  .Select-menu-outer {
    position: relative;
    z-index: 999;
  }
`;

/**
 * props definition
 */
const propTypes = {
  onlyOptions: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  onlyOptions: [],
  options: [],
  value: "",
};

/**
 *
 * @param options array of objects for selection
 * @param onlyOptions only options to display to user
 * @param value select option to display
 */
const Select = ({ placeholder, options, onlyOptions, value, ...props }) => {
  const SelectComponents = {
    IndicatorSeparator: () => null,
    DropdownIndicator,
    Option: (props) => (
      <components.Option {...props}>
        <Content {...props} />
      </components.Option>
    ),
    SingleValue: (props) => (
      <components.SingleValue {...props}>
        <Content {...props} />
      </components.SingleValue>
    ),
  };

  let _options = options;
  let _value = "";

  if (onlyOptions && onlyOptions.length > 0) {
    _options = options.filter(
      (option) =>
        !!onlyOptions.find(
          (_option) => _option?.toLowerCase() === option.value?.toLowerCase(),
        ),
    );
  }

  if (value) {
    if (!Array.isArray(value)) {
      _value =
        options.find(
          (option) =>
            (option.value || "").toString()?.toLowerCase() ===
              (value || "").toString()?.toLowerCase() || "",
        ) || "";
    }

    if (Array.isArray(value)) {
      _value =
        options.filter((option) =>
          value
            ?.map((v) => String(v))
            .includes((option.value || "").toString()),
        ) || [];
    }
  }

  return (
    <ErrorBoundary>
      <SelectWrapper
        {...props}
        value={_value}
        styles={styles}
        options={_options}
        components={SelectComponents}
        placeholder={placeholder || ""}
      />
    </ErrorBoundary>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default React.memo(Select);
