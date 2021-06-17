import React from "react"
import NavBarAr from "./NavBarAr"
import Footer from "./Footer"
import Seo from "../components/Seo"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

const LayoutAr = ({ children }) => {
  return (
    <div className="layout">
      <Seo />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBarAr />
      <div className="content" style={{ fontFamily: "Almarai" }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default LayoutAr
