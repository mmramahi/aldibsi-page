import React from "react"
import { Button } from "react-bootstrap"

const HeroAr = () => {
  return (
    <section className="bg-image" style={{ fontFamily: "Almarai" }}>
      <video
        className="intro-video w-100"
        poster=""
        playsinline
        autoPlay
        muted
        loop
      >
        <source src="backgroung-video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="background mask">
        <div className="text container ">
          <div className="position-relative">
            <h1
              className=" top-50 start-50 text-center text-uppercase hero-h1"
              style={{ fontFamily: "Almarai" }}
            >
              شركةالدبسي للتسويق الكتروني
              <br />
              حلول تسويقية مبتكرة
            </h1>
            <hr className="main-hr" />
            <div className="text-center">
              <Button variant="danger" href="#contact">
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAr
