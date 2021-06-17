import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Navbar, Nav } from "react-bootstrap"

const NavBarAr = () => {
  return (
    <header dir="rtl" style={{ fontFamily: "Almarai" }}>
      <Container style={{ fontFamily: "Almarai" }}>
        <Navbar
          expand="sm"
          bg="dark"
          variant="dark"
          className="fixed-top scrolling-navbar"
        >
          <Container>
            <Navbar.Brand href="/ar">
              <StaticImage
                src="../images/Aldibsi Logo11-08.png"
                alt="logo"
                placeholder="blurred"
                width="80"
                loading="eager"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse
              id="navbarResponsive"
              dir="rtl"
              style={{ fontFamily: "Almarai" }}
            >
              <Nav className="mr-auto" dir="rtl">
                <Link to="/ar" className="nav-link" activeClassName="active">
                  الرئيسية
                </Link>
                <Link
                  to="/ar/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  من نحن
                </Link>
                <Link
                  to="/ar/ourwork"
                  className="nav-link"
                  activeClassName="active"
                >
                  أعمالنا
                </Link>
                <Link
                  to="/ar#contact-ar"
                  className="nav-link"
                  activeClassName="active"
                >
                  تواصل معنا
                </Link>
                <Link
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: "#ff9700" }}
                >
                  English
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  )
}

export default NavBarAr
