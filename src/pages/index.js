import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Cta from "../components/CallToAction"
import OurWorks from "../components/OurWorks"
import Projects from "../components/Projects"
import FormContact from "../components/FormContact"

// import myvideo from "./../assets/background-video.mp4"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Cta />
      <OurWorks />
      <Projects />
      <FormContact />
    </Layout>
  )
}
