import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        e.target,
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <Container>
          <Row>
            <Col md={8} data-aos="fade-up">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <Form.Group controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <br />
                <Button type="submit" variant="primary" className="btn-custom btn-lg">
                  Send Message
                </Button>
              </Form>
            </Col>

            <Col md={3} className="offset-md-1 contact-info" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </Col>
          </Row>

          <Row data-aos="fade-up" data-aos-delay="200">
            <Col md={12}>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/core.ai_toch/" target="_blank" rel="noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/core-ai-toch/" target="_blank" rel="noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="footer">
        <Container className="text-center">
          <p>
            &copy; Core AI Toc H Institute of Science and Technology. Design by{" "}
            <a href="#">Core AI Team</a>
          </p>
        </Container>
      </div>
    </div>
  );
};
