import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "GirlieQuest",
      desc: "A fun educational multi-lingual quiz app on sexual and reproductive health education.",
      link: "https://girlie-quest.vercel.app"
    },
    {
      title: "MickyPrint",
      desc: "A landing page for a branding company.",
      link: "https://mickyprint.vercel.app"
    },
    {
      title: "StudiRad Academy",
      desc: "A project related to Radiography studies and visualization.",
      link: "https://studi-rad.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="shadow-lg h-100 border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <Button variant="info" href={proj.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
