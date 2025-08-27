import React from "react";
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <section className="hero-section text-center text-light d-flex align-items-center">
      <Container>
        <h1>Hello, I'm <span className="highlight">Wisdom</span></h1>
        <p>Frontend Developer | Radiographer | Lifelong Learner</p>
        <Button variant="primary" href="/projects">View My Work</Button>
      </Container>
    </section>
  );
}

export default Home;
