import React from "react"
import Layout from "../components/Layout"
import { Container, Image, Col, Row, Card, CardDeck } from "react-bootstrap"

const OurWork = () => {
  return (
    <Layout>
      <Container>
        <section
          className="our-work"
          style={{ marginTop: "108px", color: "#fff" }}
        >
          <h2 className="pb-4">Our Work</h2>
          <h4>All works done with passion :)</h4>
          <CardDeck className="pb-4 mt-4">
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img variant="top" src="postImag/3D.jpg" alt="post image" />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img variant="top" src="postImag/386.jpg" alt="post image" />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img variant="top" src="postImag/11.jpg" alt="post image" />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/48699360.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/Silver.1jpg.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img variant="top" src="postImag/wh.jpg" alt="post image" />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>
                Business card
              </Card.Header>
              <Card.Img
                variant="top"
                src="postImag/B-5441878111.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>
                Business card
              </Card.Header>
              <Card.Img
                variant="top"
                src="postImag/Free_Business_Card_mockup_2.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>
                Business card
              </Card.Header>
              <Card.Img
                variant="top"
                src="postImag/Free_Business_Card2_mockup_2.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Poster</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/eid- mubarak-01.jpg"
                alt="post image"
              />
            </Card>

            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Poster</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/P-210612.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Poster</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/P-4288056.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Poster</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/P-5205957.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Poster</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/5468988.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/4869936.jpg"
                alt="post image"
              />
            </Card>
            <Card style={{ minWidth: "350px" }} className="mb-4 card-animation">
              <Card.Header style={{ color: "black" }}>Logo</Card.Header>
              <Card.Img
                variant="top"
                src="postImag/Cutout.jpg"
                alt="post image"
              />
            </Card>
          </CardDeck>
        </section>
      </Container>
    </Layout>
  )
}

export default OurWork
