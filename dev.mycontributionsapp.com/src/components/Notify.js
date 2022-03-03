import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Checkbox from "../Icons/Checkbox";
import Close from "../Icons/Close";

/**
 * props definition
 */
const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  body: "",
  title: null,
  type: "default",
};

const Notify = ({ title, body, type }) => (
  <Fragment>
    {title && <Header>{title}</Header>}
    <Content>
      {type && (
        <span className="content__icon">
          {type === "success" && (
            <Checkbox
              checked
              width={32}
              height={32}
              variant="circle"
              color="var(--soft-green)"
            />
          )}
          {type === "error" && (
            <Close
              width={32}
              height={32}
              variant="filled"
              color="var(--pale-red)"
            />
          )}
        </span>
      )}
      <small className="content__body">{body}</small>
    </Content>
  </Fragment>
);

/**
 * styles
 */
const Header = styled.h3``;

const Content = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);

  .content__body {
    margin: auto 0;
    line-height: 1.125;
    color: var(--navy);
    letter-spacing: -0.4px;
    font-family: var(--font-family-worksans);
  }
`;

Notify.propTypes = propTypes;
Notify.defaultProps = defaultProps;

export default Notify;
