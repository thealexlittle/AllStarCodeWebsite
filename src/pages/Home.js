import React from 'react';
import ReactDOM from 'react-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import SideBar from '../lib/components/Sidebar';
import TopNav from '../lib/components/TopNav';

function Home() {
  return (
      <div>
          <TopNav/>
          <Container fluid = 'true'>
              <Row>
                  <Col>
                      <SideBar/>
                  </Col>
                  <Col xs = {9}>
                      <h1> Home </h1>
                  </Col>
              </Row>
          </Container>
      </div>
        );
}

export default Home;
