import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navigation = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.nav1}</Nav.Link>
            <Nav.Link href="#features">{props.nav2}</Nav.Link>
            <Nav.Link href="#pricing">{props.nav3}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
