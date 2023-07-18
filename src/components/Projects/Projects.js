import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: '#1fc2ff' }}>
          Works
        </h1>
        <p style={{ color: "black" }}>
          私が制作した作品です。
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              image={leaf}
              title={'サンプル'}
              description={'サンプル作品の説明文です'}
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
