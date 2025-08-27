// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// function Projects() {
//   const projects = [
//     {
//       title: "GirlieQuest",
//       desc: "A fun educational multi-lingual quiz app on sexual and reproductive health education.",
//       link: "https://girlie-quest.vercel.app"
//     },
//     {
//       title: "MickyPrint",
//       desc: "A landing page for a branding company.",
//       link: "https://mickyprint.vercel.app"
//     },
//     {
//       title: "StudiRad Academy",
//       desc: "A project related to Radiography studies and visualization.",
//       link: "https://studi-rad.vercel.app"
//     }
//   ];

//   return (
//     <section id="projects" className="py-5">
//       <Container>
//         <h2 className="fw-bold text-center mb-5">Projects</h2>
//         <Row>
//           {projects.map((proj, idx) => (
//             <Col md={4} key={idx} className="mb-4">
//               <Card className="shadow-lg h-100 border-0">
//                 <Card.Body>
//                   <Card.Title className="fw-bold">{proj.title}</Card.Title>
//                   <Card.Text>{proj.desc}</Card.Text>
//                   <Button variant="info" href={proj.link}>
//                     View Project
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Projects;

import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "GirlieQuest",
    description:
      "A fun educational multi-lingual quiz app on sexual and reproductive health designed for teenage girls and adolescents.",
    tech: ["Html, CSS, React"],
    img: "GirlieQuest.png",
    link: "https://github.com/yourusername/girliequest"
  },
  {
    title: "MilkyPrint",
    description:
      "Landing page for a branding company with sleek UI and responsive design.",
    tech: ["React", "Bootstrap", "CSS"],
    img: "MICKY 1.png",
    link: "https://github.com/yourusername/milkyprint"
  },
  {
    title: "StudiRad",
    description:
      "A web platform for radiography students to collaborate, learn, and access resources.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "Studiradlogo.png",
    link: "https://github.com/yourusername/studirad"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">🚀 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img
              style={{content: 'contents'}}
              src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="btn-project"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
