import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

const FormConractAr = () => {
  return (
    <section
      style={{ backgroundColor: "#15171a", color: "#ff9700" }}
      className="p-5"
    >
      <Container dir="rtl">
        <Row>
          <Col md={6}>
            <h2 dir="rtl" className="text-right">
              هل لديك مشروع تفكر فيه؟{" "}
            </h2>
            <h4 id="contact-ar" className="pb-4 text-right" dir="rtl">
              نحن هنا للمساعدة ، أرسال تفاصيل مشروعك ونحن سنصل بك
            </h4>
            <Form
              dir="rtl"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group
                className="mb-3 text-right"
                controlId="formBasicEmail"
              >
                <Form.Label dir="rtl" className="text-right">
                  اسمك
                </Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group
                className="mb-3 text-right"
                controlId="formBasicEmail"
              >
                <Form.Label>بريدك الالكتروني</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  لن نشارك بريدك الإلكتروني مع أي شخص آخر.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 text-right"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>رسالتك</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>

              <Button
                className="d-flex justify-content-end"
                dir="rtl"
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#ff9700",
                  color: "#474747",
                }}
              >
                ارسال
              </Button>
            </Form>
          </Col>
          <Col className="contact-us-img ">
            <StaticImage
              src="../images/map.png"
              alt="post image"
              placeholder="blurred"
              objectFit="contain"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FormConractAr
