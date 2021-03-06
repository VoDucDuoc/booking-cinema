import React, { useState } from "react";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";
export default function Test() {
  const [key, setKey] = useState("home");
  const [keyHome, setKeyHome] = useState('home1.1');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">home 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">home 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Tabs
                    activeKey={keyHome}
                    onSelect={(k) => setKeyHome(k)}
                  >
                    <Tab eventKey="home1.1" title="Home1.1">
                      <p>home1.1111111</p>
                    </Tab>
                    <Tab eventKey="home1.2" title="Home1.2">
                      <p>home1.22222</p>
                    </Tab>
                    
                  </Tabs>
                </Tab.Pane>
                <Tab.Pane eventKey="second">home22222222222</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">profile 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">profile 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">profile1111111111111</Tab.Pane>
                <Tab.Pane eventKey="second">profile222222222222</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">contact 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">contact 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">contact1111111</Tab.Pane>
                <Tab.Pane eventKey="second">contact222222</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Tab>
    </Tabs>
  );
}
