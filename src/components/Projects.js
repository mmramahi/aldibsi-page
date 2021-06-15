import React from "react"
import { Container, Card, CardDeck, Button } from "react-bootstrap"

const Projects = () => {
  return (
    <section style={{ backgroundColor: "#e9ecef" }} className="p-5">
      <Container>
        <h2 className="pb-4">Our work</h2>
        <CardDeck className="pb-4">
          <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Logo</Card.Header>
            <Card.Img variant="top" src="postImag/3D.jpg" alt="post image" />
          </Card>
          <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Business card</Card.Header>
            <Card.Img
              variant="top"
              src="postImag/Free_Business_Card_mockup_2.jpg"
              alt="post image"
            />
          </Card>

          <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Logo</Card.Header>
            <Card.Img variant="top" src="postImag/wh.jpg" alt="post image" />
          </Card>
        </CardDeck>
        <Button
          variant="dark"
          href="/ourwork"
          style={{ borderColor: "#ff9700", color: "#ff9700" }}
        >
          Find more
        </Button>
      </Container>
    </section>
  )
}

export default Projects
