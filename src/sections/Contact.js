import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Contact() {
const navigate = useNavigate

function handleClick() {
  navigate('https://studi-rad.vercel.app')
}

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Contact Me</h2>
        <Form className="w-75 mx-auto p-4 shadow rounded bg-white">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Your message" required />
          </Form.Group>

          <div className="text-center">
            <Button onClick={handleClick()} variant="info" type="submit" className="px-5">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
