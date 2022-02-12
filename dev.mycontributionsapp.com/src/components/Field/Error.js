import React, { Fragment } from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Error = ({ name, className, withFormik, error, ...props }) => (
  <Fragment>
    {withFormik ? (
      <ErrorMessage
        name={name}
        component="small"
        style={{ fontSize: 12 }}
        className={className || "pale-red-text ms-4 mt-1"}
        {...props}
      />
    ) : (
      <Fragment>
        {error && (
          <small className={className || "pale-red-text ms-4 mt-1"}>
            {error}
          </small>
        )}
      </Fragment>
    )}
  </Fragment>
);

Error.propTypes = propTypes;

export default Error;
