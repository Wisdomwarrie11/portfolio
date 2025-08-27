import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-info">
          Wisdom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
