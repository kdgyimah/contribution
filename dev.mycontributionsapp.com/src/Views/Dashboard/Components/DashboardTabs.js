import React, { useState } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import Reports from "../Reports";
import Groups from "../Groups";

const DashboardTabs = () => {
  const [key, setKey] = useState("groups");

  return (
    <DashboardTabsStyled>
      <Tab.Container
        id="dashboard-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="px-3 aqua-blue-bg"
      >
        <Nav avariant="pills" className="flex-column aqua-blue-bg">
          <Row>
            <Col sm={6}>
              <Nav.Item>
                <Nav.Link eventKey="groups">Groups</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={6}>
              <Nav.Item>
                <Nav.Link eventKey="reports">Reports</Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Nav>

        <Tab.Content className="p-5">
          <Tab.Pane eventKey="groups">
            <Groups />
          </Tab.Pane>
          <Tab.Pane eventKey="reports">
            <Reports />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </DashboardTabsStyled>
  );
};

const DashboardTabsStyled = styled.div`
  .nav-link {
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-green);

    &.active {
      border-bottom: 2px solid var(--primary-green);
    }
  }
`;

export default DashboardTabs;
