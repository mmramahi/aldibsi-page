import React from "react"
import Layout from "../components/Layout"

// import myvideo from "./../assets/background-video.mp4"

export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Aldibsi web page</h1>
          </div>
          <div className="video-container">
            <div class="color-overlay"></div>
            <video autoPlay loop muted>
              <source type="video/mp4" src="backgroung-video.mp4" />
            </video>
          </div>
        </div>
      </section>
    </Layout>
  )
}
