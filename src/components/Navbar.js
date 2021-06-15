import React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
  return (
    <header>
      <Container>
        <Navbar
          expand="sm"
          bg="dark"
          variant="dark"
          className="fixed-top scrolling-navbar"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="Aldibsi Logo11-08.png"
                alt="aldibsi company logo"
                width="80"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="ml-auto">
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
                <Link to="/about" className="nav-link" activeClassName="active">
                  About us
                </Link>
                <Link
                  to="/ourwork"
                  className="nav-link"
                  activeClassName="active"
                >
                  Our Work
                </Link>
                <Link
                  to="/#contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  )
}

export default NavBar
