import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              title="MERN Stack Development"
              description="A certification in MERN Stack Development covering MongoDB, Express.js, React.js, and Node.js. Focused on building full-stack applications with authentication, database management, and deployment."
              certificateLink="https://drive.google.com/file/d/1B49ZABe_-3ezab5X9u7SlWF5KtJ7iabD/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              title="AutoCAD"
              description="A certification in AutoCAD, covering 2D drafting and 3D modeling techniques. Focused on technical drawing, precision design, and CAD software functionalities."
              certificateLink="https://drive.google.com/file/d/1YcK1UryIOfwkdJZS6rpw0Hr9XTgDBJL5/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
