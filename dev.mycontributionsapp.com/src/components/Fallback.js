import React from "react";
import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const Fallback = ({ children }) => (
  <Wrapper>
    <div className="text-center">
      <img
        src="assets/img/logo177.png"
        className="img-fluid mb-8"
        alt="logo"
        width="48"
      />
      <h5 className="mb-4 fw-bolder">{children}</h5>
      <BarLoader
        height={5}
        width={280}
        css={{ display: "block" }}
        // color="var(--clear-blue)"
        color="#54d898"
      />
    </div>
  </Wrapper>
);

/**
 * styles
 */
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export default Fallback;
