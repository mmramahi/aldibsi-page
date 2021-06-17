import React from "react"
import LayoutAr from "../../components/LayoutAr"
import { Container, Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  console.log(data)
  return (
    <LayoutAr>
      <div className="aboutUsImage">
        <StaticImage
          src="../../images/about_us.jpg"
          alt="about us image"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      <Container dir="rtl">
        <div className="aboutHeader">
          <h1 className="text-right">عن الشركة</h1>
          <h4 className="text-right">من نحن</h4>
          <h2 className="text-right" style={{ color: "#ebebeb" }}>
            نحن مختصون بالتسويق. موجودون لمساعدتك على النمو.{" "}
          </h2>
          <p className="text-right" style={{ color: "#ebebeb" }}>
            نجعلها بسيطة. نأتي كل يوم إلى العمل لأننا نحب ذلك نبحث عن حلول لأكثر
            مشكلات التسويق إثارة. نهتم بعملائنا. خبرتنا وتجربتنا في استراتيجية
            التسويق و التنفيذ تجلب خدمات تسويق ذات مستوى عالمي للشركات ، دون
            الاضطرار إلى إنفاق الكثير من المال.
          </p>

          <div className="why-us">
            <Row>
              <Col md={6}>
                <h4 className="text-right">لماذا تختارنا</h4>
                <h2 className="text-right" style={{ color: "#ebebeb" }}>
                  نحن نتفهم حقًا احتياجات السوق في مساحتنا.{" "}
                </h2>
                <p className="text-right" style={{ color: "#ebebeb" }}>
                  نحن نحب إحداث تأثير. نحن نوظف وندرب ونستثمر في موظفينا لمساعدة
                  رغبتنا في دفع الإبداع والتسويق وخلق قيمة لعملائنا. هدفنا هو
                  مساعدتك على زيادة الوعي بالعلامة التجارية وجذب العملاء
                  المحتملين المؤهلين لعملك. نحن ننتمي. نحن نؤمن بكل خدمة نبيعها
                  ونسعى دائمًا لتزويدك بحلول التسويق المستدام
                </p>
              </Col>
              <Col>
                <StaticImage
                  src="../../images/why-choose-us.png"
                  alt="about us image"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </LayoutAr>
  )
}

export default About
