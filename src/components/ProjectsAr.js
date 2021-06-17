import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Card, CardDeck, Button } from "react-bootstrap"

const ProjectsAr = () => {
  return (
    <section style={{ backgroundColor: "#e9ecef" }} className="p-5">
      <Container dir="rtl">
        <h2 className="pb-4 text-right" dir="rtl">
          أعمالنا
        </h2>
        <CardDeck className="pb-4">
          <Card className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Logo</Card.Header>
            <StaticImage
              src="../images/postImag/3D.jpg"
              alt="post image"
              placeholder="blurred"
            />
          </Card>
          <Card className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Business card</Card.Header>
            <StaticImage
              src="../images/postImag/Free_Business_Card_mockup_2.jpg"
              alt="post image"
              placeholder="blurred"
            />
          </Card>

          <Card className="mb-4 card-animation">
            <Card.Header style={{ color: "black" }}>Logo</Card.Header>
            <StaticImage
              src="../images/postImag/wh.jpg"
              alt="post image"
              placeholder="blurred"
            />
          </Card>
        </CardDeck>
        <div dir="rtl" className="d-flex justify-content-start">
          <Button
            variant="dark"
            href="/ar/ourwork"
            style={{ borderColor: "#ff9700", color: "#ff9700" }}
          >
            شاهد المزيد
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default ProjectsAr
