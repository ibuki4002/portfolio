import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaTruckArrowRight } from "react-icons/fa6";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body style={{ color: "black" }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            三重大学の四年生の田中伊吹と申します。2022年の12月にプロジェクトMに入社し、そこから主にWeb制作を中心に活動しています。
            <br />最近はreactを主に勉強していて、このサイトもreactで作成しました。
            <br />私はWeb制作において、次の2つのことを大切にしています。
          </p>
          <ul>
            <li className="about-activity">
              <FaTruckArrowRight /> シンプルで見やすいデザイン
            </li>
            <li className="about-activity">
              <FaTruckArrowRight /> 使いやすいUI/UX
            </li>

          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
