import React from "react";
import startCase from "lodash/startCase";

import CheckBoxIcon from "../Icons/Checkbox";
import WarningIcon from "../Icons/Warning";
import InfoIcon from "../Icons/Info";

export const handleFullName = (item) => {
  if (item?.first_name || item?.last_name) {
    return startCase(`${item?.first_name || ""} ${item?.last_name}`).trim();
  } else {
    return "--";
  }
};

export const handleStatusColor = (type) => {
  switch (type) {
    case "primary":
    case "processing":
      return "var(--turquoise-blue)";
    case "success":
    case "processed":
      return "var(--dark-mint)";
    case "warning":
    case "waiting":
    case "awaiting":
      return "var(--mango)";
    case "danger":
    case "failed":
      return "var(--pale-red)";
    default:
      return "var(--turquoise-blue)";
  }
};

export const handleStatusIcon = (type) => {
  const statusColor = handleStatusColor(type);

  switch (type) {
    case "info":
    case "primary":
    case "processing":
      return ({ color, ...props }) => (
        <InfoIcon color={color || statusColor} {...props} />
      );
    case "success":
    case "processed":
      return ({ color, ...props }) => (
        <CheckBoxIcon
          checked
          variant="circle"
          color={color || statusColor}
          {...props}
        />
      );
    case "warning":
    case "failed":
    case "danger":
      return ({ color, ...props }) => (
        <WarningIcon color={color || statusColor} {...props} />
      );
    default:
      return null;
  }
};

// export const transactionType = (transaction) => {
//   //   wallet_type
//   //     withdrawable - sell to
//   //     prepaid - deposit money to
//   // type
//   //     debit
//   //     credit
//   // prepaid wallet and credit - topup - deposit
//   // prepaid wallet and debit - bought - purchase
//   // withdrawable and debit - withdrawal - withdrawal
//   // withdrawable and credit - sold - sale

// };

// Getting sum of numbers in an array
export const sumArray = (array = [], initialValue = 0) => {
  const sum = array.reduce(function (a, b) {
    return Number(a) + Number(b);
  }, initialValue);

  return sum;
};

export const handleNumber = (
  number = 0,
  minDecimalPlaces = 2,
  maxDecimalPlaces = 2,
) => {
  number = isNaN(number) ? Number(0) : Number(number);

  return parseFloat(number).toLocaleString("en-GB", {
    style: "decimal",
    minimumFractionDigits: minDecimalPlaces,
    maximumFractionDigits: maxDecimalPlaces,
  });
};

export const Money = (amount = 0) =>
  new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 2,
  }).format(isNaN(amount) ? Number(0) : Number(amount));
