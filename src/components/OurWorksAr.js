import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Card, CardDeck } from "react-bootstrap"

const OurWorksAr = () => {
  return (
    <section style={{ backgroundColor: "#ff9700" }} className="p-5">
      <Container dir="rtl">
        <h2 className="pb-4 text-right" dir="rtl">
          خدماتنا
        </h2>
        <CardDeck className="pb-4">
          <Card className="mb-4 single-services-box">
            <StaticImage
              src="../images/servicesImage/SOCIAL-MEDIA-MARKETING.png"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body dir="rtl">
              <Card.Title dir="rtl" className="text-right">
                تسويق على وسائل التواصل الاجتماعي
              </Card.Title>
              <Card.Text dir="rtl" className="text-right">
                في شركة الدبسي نقوم بتصميم الإعلانات وإطلاق الحملات الإعلانية
                على وسائل التواصل الاجتماعي. نحن ندير أيضًا حسابات عبر الإنترنت
                وننتجها المحتوى الخاص بمشروعك للتفاعل مع جمهورك.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 single-services-box">
            <StaticImage
              src="../images/servicesImage/OVEDMU1.jpg"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body>
              <Card.Title dir="rtl" className="text-right">
                التصميم الجرافيكي
              </Card.Title>
              <Card.Text dir="rtl" className="text-right">
                يقوم فريقنا بتصميم هوية بصرية مناسبة للاستخدامات المتعددة التي
                سيكون لها تأثير إيجابي على عملك ، مثل إعلانات وشعارات مواقع
                التواصل الاجتماعي.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4 single-services-box">
            <StaticImage
              src="../images/servicesImage/web-development-2.png"
              alt="post image"
              placeholder="blurred"
            />
            <Card.Body>
              <Card.Title dir="rtl" className="text-right">
                تطوير الموقع{" "}
              </Card.Title>
              <Card.Text dir="rtl" className="text-right">
                يقوم فريقنا ببناء وتصميم مواقع الويب المناسبة. لها استخدامات
                متعددة. وسيكون لذلك تأثير إيجابي على اعمال
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </section>
  )
}

export default OurWorksAr
