import React from "react";
import PropTypes from "prop-types";
import flags from "emoji-flags";

const propTypes = {
  code: PropTypes.string.isRequired,
  label: PropTypes.string,
  emoji: PropTypes.bool,
};

const defaultProps = {
  label: "",
  emoji: false,
};

const Flag = ({ code, label, emoji, ...props }) => {
  if (!code) {
    return false;
  }

  const flag = flags.countryCode(code || "");

  if (emoji) {
    return flag?.emoji || "";
  }

  return (
    <span role="img" aria-label={label || code} {...props}>
      {flag?.emoji || ""}
    </span>
  );
};

Flag.propTypes = propTypes;
Flag.defaultProps = defaultProps;

export default Flag;
