import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiPhp

} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlutter
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Techstack() {

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

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={66} styles={buildStyles(customStyles)} >
          <DiHtml5 style={{ color: "#fd7e00" }} />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={66} styles={buildStyles(customStyles)}>
          <DiCss3 style={{ color: "blue" }} />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={90} styles={buildStyles(customStyles)}>
          <SiFlutter style={{ color: "#1fc2ff" }} />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={66} styles={buildStyles(customStyles)}>
          <DiPhp style={{ color: "#a260bf" }} />
        </CircularProgressbarWithChildren>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <CircularProgressbarWithChildren value={66} styles={buildStyles(customStyles)}>
          <DiReact style={{ color: "#1fc2ff" }} />
        </CircularProgressbarWithChildren>
      </Col>
    </Row>
  );
}

export default Techstack;
