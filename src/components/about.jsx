import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"; // Import React-Bootstrap components

export const About = (props) => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Image
              src="img/coreai.png"
              className="img-fluid"
              alt="About Us"
              fluid
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Our Major Aim ?</h3>
              <div className="list-style">
                <Row>
                  <Col lg={6} sm={6} xs={12}>
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
