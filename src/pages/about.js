import React from "react"
import Layout from "../components/Layout"
import { Container, Image, Col, Row } from "react-bootstrap"

const About = () => {
  return (
    <Layout>
      <div className="aboutUsImage">
        <Image src="about_us.jpg" />
      </div>
      <Container>
        <div className="aboutHeader">
          <h1>About Aldibsi Company</h1>
          <h4>WHO WE ARE</h4>
          <h2>We are marketing people. We exist to help you grow.</h2>
          <p>
            we make it simple. Each day, we come to work because we love to
            solve some of those most interesting marketing problems for our
            clients. Our expertise and experience in marketing strategy and
            execution bring to the businesses world-class marketing services,
            without having to spend gazillions of dollars.
          </p>

          <div className="why-us">
            <Row>
              <Col md={6}>
                <h4>WHY CHOOSE US</h4>
                <h2>We truly understand the market needs in our space.</h2>
                <p>
                  We love making an impact. We hire, train and invest in top
                  talent to help our desire to push creative & marketing
                  boundaries and create value for our clients. Our goal is to
                  help you increase brand awareness and drive qualified leads to
                  your business. We belong. We believe in every service we sell
                  and always strive to provide you with sustainable marketing
                  solutions
                </p>
              </Col>
              <Col>
                <Image src="why-choose-us.png" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default About
