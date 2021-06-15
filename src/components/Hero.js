import React from "react"
import { Button } from "react-bootstrap"

const Hero = () => {
  return (
    <section className="bg-image">
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
            <h1 className=" top-50 start-50 text-center text-uppercase">
              Digital Marketing Company
              <br />
              Innovative Marketing Solutions
            </h1>
            <hr className="main-hr" />
            <div className="text-center">
              <Button variant="danger" href="#contact">
                contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
