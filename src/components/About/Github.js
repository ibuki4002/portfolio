import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#1fc2ff" }}>
        Days I Code
      </h1>
      <GitHubCalendar
        username="ibuki4002"
        blockSize={15}
        blockMargin={5}
        color="#1fc2ff"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
