import { About } from "../components/home_components/About"
import { CTA } from "../components/home_components/CTA"
import { Footer } from "../components/home_components/Footer"
import { Hero } from "../components/home_components/Hero"
import { Offerings } from "../components/home_components/Offerings"
import { NavBar } from "../components/NavBar"

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Offerings />
      <CTA />
      <Footer />
    </>
  )
}

export default HomePage
