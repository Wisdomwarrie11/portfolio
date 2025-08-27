import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="hero-section text-light d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-3 fw-bold">Hello, I'm <span className="highlight">Wisdom</span></h1>
        <p className="lead">Frontend Developer | Health Professional | Academic Coach</p>
        <div className="mt-4">
          <Button variant="info" size="lg" href="#projects" className="me-3">
            View My Work
          </Button>
          <Button variant="outline-light" size="lg" href="#contact">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
