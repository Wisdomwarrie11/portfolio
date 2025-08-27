import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Technologies.css"; // custom styles

function Technologies() {
  const techs = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ];

  return (
    <section id="technologies" className="py-5 tech-section">
      <Container>
        <h2 className="fw-bold text-center mb-5 section-title">Technologies</h2>
        <Row className="justify-content-center">
          {techs.map((tech, idx) => (
            <Col xs={6} md={3} lg={2} key={idx} className="mb-4 text-center">
              <div className="tech-card">
                <img src={tech.img} alt={tech.name} className="tech-logo" />
                <p className="mt-2">{tech.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Technologies;
