import React from "react"
import { Container, Jumbotron, Col, Row, Image } from "react-bootstrap"

const CallToAction = () => {
  return (
    <Jumbotron
      fluid
      className="content"
      style={{
        marginBottom: "0",
        marginTop: "0",
        backgroundColor: "#15171a",
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center CTA">
            <div style={{ color: "#ff9700" }}>
              <h2 className="pb-4">Our mission</h2>
              <p style={{ color: "#fff" }}>
                Is to build and enhance your mental image in various ways
                Marketing on social networks and the Internet, as we provide
                solutions Comprehensive digital marketing for companies and
                individuals, and our work with our clients is focused on Small
                and large companies, shops and charities To help them reach
                their audience to achieve their goals through E-marketing, we
                specialize in analyzing customer needs and identifying tools
                Business-appropriate marketing
              </p>
            </div>
          </Col>
          <Col>
            <Image src="19724-01.png" alt="image" fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default CallToAction
