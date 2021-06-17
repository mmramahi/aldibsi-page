import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Jumbotron, Col, Row } from "react-bootstrap"

const CallToActionAr = () => {
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
        <Row dir="rtl">
          <Col md={6} className="d-flex align-items-center CTA">
            <div style={{ color: "#ff9700" }} dir="rtl">
              <h2 className="pb-4 text-right">مهمتنا</h2>
              <p style={{ color: "#ebebeb" }} dir="rtl">
                هي بناء وتعزيز صورتك الذهنية بمختلف الطرق التسويق على الشبكات
                الاجتماعية والانترنت حسب ما نقدمه حلول التسويق الرقمي الشامل
                للشركات و الأفراد ، ويتركز عملنا مع عملائنا على الشركات الصغيرة
                والشركات الكبيرة والمتاجر والجمعيات الخيرية لمساعدتهم في الوصول
                جمهورهم لتحقيق أهدافهم من خلال التسويق الإلكتروني ، نحن متخصصون
                في تحليل احتياجات العملاء وتحديد الأدوات تسويق مناسب للأعمال
              </p>
            </div>
          </Col>
          <Col>
            {/* <Image src="19724-01.png" alt="image" fluid /> */}
            <StaticImage
              src="../images/19724-01.png"
              alt="call for action"
              placeholder="blurred"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default CallToActionAr
