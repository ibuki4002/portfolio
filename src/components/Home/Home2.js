import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mieet_logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoJava, BiLogoFlutter, BiLogoReact } from "react-icons/bi";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgWebsite } from "react-icons/cg";
import { MdFestival } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#1fc2ff" }}>
              INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              私は、三重大学の学生です。大学では、医学を専攻しています。
              <br />
              私は大学一年生の時に、プログラミングを始めました。コロナ禍
              で、オンライン授業が多くなったこともあり、思い切って初めて見たのですが、楽しくてハマってしまいました。
              <br />
              今は、主に、Reactを勉強しています。このサイトもReactで作成しました。
              <br />
              現在は、株式会社プロジェクトMのメンバーとして、活動しています。

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'red', color: '#fff' }}
            date="2022/1"
            icon={<BiLogoJava />}
          >
            <h3 className="vertical-timeline-element-title">プログラミングを始めました。</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              最初は全然知識が無かったので、Javaの基礎を勉強しました。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022/4"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<CgWebsite />}
          >
            <h3 className="vertical-timeline-element-title">Web制作の勉強を始めました。</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Javaが難しくて、挫折し、代わりにWeb制作の勉強を始めました。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022/12/1"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={< MdFestival />}
          >
            <h3 className="vertical-timeline-element-title">プロジェクトM入社</h3>
            <p>
              大学三年生の時に、プロジェクトMに入社しました。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023/2"
            iconStyle={{ background: '#a9ceec', color: '#fff' }}
            icon={<BiLogoFlutter />}
          >
            <h3 className="vertical-timeline-element-title">アプリ制作</h3>
            <p>
              Flutterを用いたアプリ制作を勉強しました。プロジェクトMのコンペで、実際に簡単なアプリを制作しました。
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023/4"
            iconStyle={{ background: 'white', color: '#1fc2ff' }}
            icon={<BiLogoReact />}
          >
            <h3 className="vertical-timeline-element-title">React</h3>
            <p>
              Reactの勉強を始めました。このサイトもReactで作成しました。
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
