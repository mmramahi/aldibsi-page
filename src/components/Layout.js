import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../styles/reset.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Seo />
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
