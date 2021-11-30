import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../css/style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Quote from "../components/Quote/Quote"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"

const IndexPage = () => {

  return(
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Features />
      <Quote />
      <About />
      <Projects />
    </Layout>
  );
}

export default IndexPage
