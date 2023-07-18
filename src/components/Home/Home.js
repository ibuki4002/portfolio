import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import TextAnimation from "./TextAnimation";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" >
        <Particle />
        <Container className="home-content d-flex justify-content-center align-items-center">
          <Row>
            <Col md={20} className="home-header text-center">
              <div style={{ textAlign: "center" }}>
                <TextAnimation />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
