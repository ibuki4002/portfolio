import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Toolstack() {
  const customStyles = {
    // スタイルのオブジェクトを定義
    path: {
      stroke: '#ff0000',
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    trail: {
      stroke: '#f2f2f2',
    },
    text: {
      fill: '#333',
      fontSize: '16px',
    },
  };
  const percentage = 66;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={66}
        >
          <SiMacos style={{ color: "red" }} />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={80} styles={buildStyles(customStyles)}>
          <SiVisualstudiocode style={{ color: "blue" }} />
        </CircularProgressbarWithChildren>

      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={90} styles={buildStyles(customStyles)}>
          <SiSlack style={{ color: "black" }} />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}

export default Toolstack;
