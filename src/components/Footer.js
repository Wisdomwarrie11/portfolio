import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Wisdom Warrie | Built with React & Bootstrap</p>
      </Container>
    </footer>
  );
}

export default Footer;
