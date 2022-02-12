import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

import ErrorMessage from "./Error";

export const FloatWrapper = ({ children, ...props }) => {
  /**
   * variables
   */
  const {
    name,
    error,
    label,
    prefix,
    postfix,
    withFormik,
    labelClassName,
    wrapperClassName,
    containerClassName,
  } = props;

  return (
    <div className={wrapperClassName || "mb-6"}>
      <Container className={`input-container ${containerClassName || ""}`}>
        {prefix && prefix}
        <div className="form-floating w-100">
          {children}
          <label htmlFor={name} className={labelClassName || ""}>
            {label}
          </label>
        </div>
        {postfix && postfix}
      </Container>
      <ErrorMessage name={name} {...{ error, withFormik }} />
    </div>
  );
};

export const DefaultWrapper = ({ children, ...props }) => {
  /**
   * variables
   */
  const {
    name,
    error,
    label,
    prefix,
    postfix,
    withFormik,
    labelClassName,
    wrapperClassName,
    containerClassName,
  } = props;

  return (
    <Form.Group
      {...(!props?.id && { controlId: name })}
      className={wrapperClassName || "mb-6"}
    >
      {label && (
        <Form.Label className={labelClassName || ""}>{label}</Form.Label>
      )}
      <Container className={`input-container ${containerClassName || ""}`}>
        {prefix && prefix}
        {children}
        {postfix && postfix}
      </Container>
      <ErrorMessage name={name} {...{ error, withFormik }} />
    </Form.Group>
  );
};

/**
 * styles
 */
const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out;
  border: solid 0.0625rem var(--light-periwinkle);

  .form-control,
  .form-select {
    border: none;
  }

  &:focus-within {
    border-color: var(--clear-blue);
  }
`;
