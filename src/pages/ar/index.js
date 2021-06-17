import React from "react"
import LayoutAr from "../../components/LayoutAr"
import HeroAr from "../../components/HeroAr"
import CtaAr from "../../components/CallToActionAr"
import OurWorksAr from "../../components/OurWorksAr"
import ProjectsAr from "../../components/ProjectsAr"
import FormContactAr from "../../components/FormContactAr"

// import myvideo from "./../assets/background-video.mp4"

export default function Home() {
  return (
    <LayoutAr>
      <HeroAr />
      <CtaAr />
      <OurWorksAr />
      <ProjectsAr />
      <FormContactAr />
    </LayoutAr>
  )
}
