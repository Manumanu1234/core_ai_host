import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
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
            <Col md={8}>
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <Form name="sentMessage" validated onSubmit={handleSubmit}>
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
                <Button type="submit" variant="primary" className="btn-custom btn-lg">
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col md={3} mdOffset={1} className="contact-info">
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
          <Row>
            <Col md={12}>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/core.ai_toch/?igsh=MTlwb2d2MnNyNzV1cA%3D%3D#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/core-ai-toch/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
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
            &copy; Core Ai Toc H Institute of Science and Technology. Design by{" "}
            <a href="#" rel="nofollow">
              Core Ai Team
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
};
