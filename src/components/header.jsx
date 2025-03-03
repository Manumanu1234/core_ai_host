import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import necessary React-Bootstrap components

export const Header = (props) => {
  return (
    <header id="header" className="intro">
      <div className="overlay">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center intro-text">
              <h1>{props.data ? props.data.title : "Loading"}</h1>
              <p >{props.data ? props.data.paragraph : "Loading"}</p>
              <Button
                href="#features"
                variant="primary"
                size="lg"
                className="page-scroll btn-custom"
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};
