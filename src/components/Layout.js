import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo"
import "../styles/reset.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Seo />
      <div className="nav-raper">
        <Navbar />
      </div>
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
