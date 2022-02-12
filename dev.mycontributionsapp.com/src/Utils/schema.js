import {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { string, number, mixed, array } from "yup";

/**
 * regex
 */
export const pmAddressRegex = /^[Uu][\d]{7,8}$/;

/**
 * validation object for string
 */
export const requireString = (field, required = true, schema) => {
  schema = (schema || string()).trim();
  return required ? schema.required(`${field} is required`) : schema;
};

/**
 * validation object for number
 */
export const requireNumber = (field, required = true, schema) => {
  schema = (schema || number()).typeError("Only numbers allowed");
  return required ? schema.required(`${field} is required`) : schema;
};

/**
 * validation object for phone number
 */
export const requirePhoneNumber = (field, required = true, schema) => {
  return (schema || string()).test(
    "isValidPhone",
    `Enter a valid ${field}`,
    (value) =>
      value
        ? isValidPhoneNumber(value) && isPossiblePhoneNumber(value)
        : !required,
  );
};

/**
 * validation object for conditions
 */
export const requireWhen = (dependencyField, field) =>
  string().when(`${dependencyField}`, (fld, schema) =>
    fld ? schema.required(`${field} is required`) : schema,
  );

/**
 * validation object for test conditions
 */
export const requireTest = (field, condition) =>
  string().test("require", `${field} is required`, (value) => condition(value));

/**
 * validation object for email
 */
export const requireEmail = (field, required = true, schema) => {
  schema = (schema || string()).email("Enter a valid email");
  return required ? schema.required(`${field} is required`) : schema;
};

/**
 * validation object for array
 */
export const requireArray = (field, required = true, schema) => {
  schema = schema || array();
  return required ? schema.min(1).required(`${field} is required`) : schema;
};

/**
 * validation object for ghana post gps
 */
export const requireGPS = (field, required = true, schema) => {
  schema = schema || string();
  return required
    ? schema
        .test("required", `${field} is required`, (address) =>
          required ? !!address : false,
        )
        .test(
          "format",
          "Enter a valid digital address",
          (address) => address && address?.match(/^[A-Z0-9]{2}-[0-9]+-[0-9]+$/),
        )
    : schema;
};

/**
 * validation object for file upload
 */
export const requireFile = ({
  field,
  schema,
  size = 2,
  type = [],
  required = true,
}) => {
  const format = (() => {
    let format = [];
    if (type.includes("image")) {
      format = [
        ...format,
        ...["image/jpg", "image/jpeg", "image/png", "image/webp"],
      ];
    }

    if (type.includes("pdf")) {
      format = [...format, "application/pdf"];
    }

    if (type.includes("csv")) {
      format = [
        ...format,
        "text/csv",
        "text/x-csv",
        "application/vnd.ms-excel",
      ];
    }

    return format;
  })();

  return (schema || mixed())
    .test("fileName", `${field} is required`, (value) => !!value || !required)
    .test("fileSize", `${field} size is too large`, (value) =>
      value ? value?.size <= size * 1000000 : !required,
    )
    .test("fileType", "Unsupported file format", (value) =>
      value
        ? format.length === 0
          ? true
          : format.includes(value?.type)
        : !required,
    );
};

/**
 * password validation schema
 * @param {*} field
 * @param {*} required
 * @param {*} schema
 * @returns
 */
export const requirePassword = (field, required = true, schema) => {
  schema = (schema || string())
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must contain a letter, number, special character and have at least 8 characters",
    )
    .min(6, "Password has to be longer than 6 characters");

  return required ? schema.required(`${field} is required!`) : schema;
};

/**
 * Full name validator
 * @param {*} field
 * @param {*} required
 * @param {*} schema
 * @returns
 */
export const requireFullName = (field, required = true, schema) => {
  schema = (schema || string()).matches(
    /^([A-Za-z-]{3,} )([A-Za-z-]{2,} )?([A-Za-z-]{3,})$/,
    "Please enter a valid first name and last name",
  );

  return required ? schema.required(`${field} is required`) : schema;
};

/**
 * OTP code validator
 * @param {*} field
 * @param {*} required
 * @param {*} schema
 * @param {*} length
 * @returns
 */
export const requireOTP = (field, required = true, schema, length = 6) => {
  schema = (schema || string())
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(length, `Must be exactly ${length} digits`)
    .max(length, `Must be exactly ${length} digits`);

  return required ? schema.required(`${field} is required`) : schema;
};
