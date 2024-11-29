import React from "react";
import "./about.css";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <Header />
      <div className="mb-4">
        <div className="contact_img d-flex align-items-center justify-content-center">
          <h1 style={{ color: "#fff", fontSize: "24px" }}>About Us</h1>
        </div>
        <Container>
          <Row className="mb-4">
            <h1
              className="my-5"
              style={{
                fontFamily: "'Kanit', sans-serif",
                textTransform: "uppercase",
                textDecoration: "underline",
                textAlign: "center",
                textUnderlineOffset: "5px",
                color: "#444",
              }}
            >
              <b>Crm</b>
            </h1>
            <Col lg={7} className="" style={{ textTransform: "capitalize" }}>
              <p>
                Losing business due to miscommunication, delayed response time,
                and missed opportunities? Happy customers tell the world, and so
                do the unhappy ones. Our CRM solution puts customers at the
                heart of your business while giving you the space to grow and
                improve. When you can help them better, you can help yourself
                better.
              </p>
              <p style={{ textIndent: "50px" }}>
                Boost Business efficiency, close more sales, effortlessly juggle
                thousands of customer interactions at once, and stay fully aware
                of the clients' needs with our CRM software.with wow, you will
                reign in the complex world of customer relationship without
                dropping the ball.
              </p>
            </Col>
            <Col lg={5}>
              <img src={require("../image/about.avif")} className="w-100" />
            </Col>
          </Row>
        </Container>
        <h1
          className="my-5"
          style={{
            fontFamily: "'Kanit', sans-serif",
            textTransform: "uppercase",
            textDecoration: "underline",
            textAlign: "center",
            textUnderlineOffset: "5px",
            color: "#444",
          }}
        >
          <b>Our Team</b>
        </h1>
        <Container>
          <Row>
            <Col className="Aabout-team g-0 p-0">
              <img src={require("../image/1.jpg")} alt="Jane" />
              <div style={{ padding: "10px 20px" }}>
                <h2>Prutha Patel</h2>
                <p className="">For your help</p>
                <p>Web Devloper</p>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <BsTelephoneFill
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>+91 83204 39508</p>
                </div>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <AiOutlineMail
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>prutha.glsbca20@gmail.com</p>
                </div>
                <div className="icons" align="center">
                  <NavLink href="#">
                    <i className="ri-twitter-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-facebook-box-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-instagram-fill" />
                  </NavLink>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                    <FaTwitter
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="https://www.facebook.com/home.php">
                    <FaFacebookF
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="https://www.instagram.com/_.pruthapatel510._/">
                    <FaInstagram
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col className="Aabout-team g-0 p-0">
              <img src={require("../image/2.jpg")} alt="Jane" />
              <div style={{ padding: "10px 20px" }}>
                <h2>Kenil Finaviya</h2>
                <p className="">For your help</p>
                <p>Web Devloper</p>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <BsTelephoneFill
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>+91 90999 46450</p>
                </div>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <AiOutlineMail
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>kenil.glsbca20@gmail.com</p>
                </div>
                <div className="icons" align="center">
                  <NavLink href="#">
                    <i className="ri-twitter-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-facebook-box-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-instagram-fill" />
                  </NavLink>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://twitter.com/home">
                    <FaTwitter
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="https://www.facebook.com/kenil.finaviya.1">
                    <FaFacebookF
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="https://www.instagram.com/kenilfinaviya/">
                    <FaInstagram
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col className="Aabout-team g-0 p-0">
              <img src={require("../image/3.jpeg")} alt="Jane" />
              <div style={{ padding: "10px 20px" }}>
                <h2>Khushi Ghadiya</h2>
                <p className="">For your help</p>
                <p>Web Devloper</p>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <BsTelephoneFill
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>+91 70692 27244</p>
                </div>
                <div className="d-flex about-icon">
                  <NavLink href="#">
                    <AiOutlineMail
                      style={{ color: "#000", fontSize: "18px" }}
                    />
                  </NavLink>
                  <p>khushi.glsbca20@gmail.com</p>
                </div>
                <div className="icons" align="center">
                  <NavLink href="#">
                    <i className="ri-twitter-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-facebook-box-fill" />
                  </NavLink>
                  <NavLink href="#">
                    <i className="ri-instagram-fill" />
                  </NavLink>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://twitter.com/">
                    <FaTwitter
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="www.facebook.com">
                    <FaFacebookF
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                  <a href="https://www.instagram.com/__.khushee_/">
                    <FaInstagram
                      style={{
                        color: "#000",
                        fontSize: "18px",
                        margin: "0 10px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default About;
