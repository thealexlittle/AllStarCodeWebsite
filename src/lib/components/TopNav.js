import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function TopNav(){
    return (
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="projects">Projects</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
    </Nav>
  </Navbar>
            )
}

export default TopNav;
