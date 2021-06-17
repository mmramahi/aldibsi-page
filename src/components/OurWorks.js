import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Card, CardDeck } from "react-bootstrap"

const OurWorks = () => {
  return (
    <section style={{ backgroundColor: "#ff9700" }} className="p-5">
      <Container>
        <h2 className="pb-4">Our Services</h2>
        <CardDeck className="pb-4">
          <Card className="mb-4 single-services-box">
            {/* <Card.Img
              variant="top"
              src="servicesImage/SOCIAL-MEDIA-MARKETING.png"
              alt="post image"
            /> */}
            <StaticImage
              src="../images/servicesImage/SOCIAL-MEDIA-MARKETING.png"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body>
              <Card.Title>Social Media Marketing</Card.Title>
              <Card.Text>
                At Al-Dibsi Company, we run ads and launch advertising campaigns
                on social media. We also manage online accounts and produce
                content for your project to interact with your audience.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 single-services-box">
            {/* <Card.Img
              variant="top"
              src="servicesImage/OVEDMU1.jpg"
              alt="post image"
            /> */}
            <StaticImage
              src="../images/servicesImage/OVEDMU1.jpg"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body>
              <Card.Title>Graphic Design</Card.Title>
              <Card.Text>
                Our team designs a visual identity suitable for multiple uses
                that will have a positive impact on your business, such as
                social media ads and logos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 single-services-box">
            {/* <Card.Img
              variant="top"
              src="servicesImage/web-development-2.png"
              alt="post image"
            /> */}
            <StaticImage
              src="../images/servicesImage/web-development-2.png"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body>
              <Card.Title>Website Development</Card.Title>
              <Card.Text>
                Our team builds and designs websites that are suitable for
                multiple uses and that will have a positive impact on your
                business
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </section>
  )
}

export default OurWorks
