import React from "react"
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap"

const FormConract = () => {
  return (
    <section
      style={{ backgroundColor: "#15171a", color: "#ff9700" }}
      className="p-5"
    >
      <Container>
        <Row>
          <Col md={6}>
            <h2>Do you have a project you are thinking of?</h2>
            <h4 id="contact" className="pb-4">
              We are here to help, send your project details and an expert will
              contact you
            </h4>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#ff9700", color: "#474747" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="contact-us-img">
            <Image src="map.png" alt="image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FormConract
