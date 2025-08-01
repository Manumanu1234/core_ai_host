import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const title = data?.title || "Loading";
  const paragraph = data?.paragraph || "Loading";

  return (
    <header id="header" className="intro">
      <div className="overlay">
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={12}
              md={8}
              className="text-center intro-text"
              data-aos="fade-down"
            >
              <h1>{title}</h1>
              <p>{paragraph}</p>
              <Button
                href="#about"
                variant="primary"
                size="lg"
                className="page-scroll btn-custom"
                data-aos="fade-up"
                data-aos-delay="300"
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
