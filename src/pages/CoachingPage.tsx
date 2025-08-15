import { CoachingHero } from "../components/coaching_components/CoachingHero"
import { CoachingPlans } from "../components/coaching_components/CoachingPlans"
import { HowToGetStarted } from "../components/coaching_components/HowToGetStarted"
import { WhatsIncluded } from "../components/coaching_components/WhatsIncluded"
import { WhoIsThisFor } from "../components/coaching_components/WhoIsThisFor"
import { Footer } from "../components/home_components/Footer"
import { NavBar } from "../components/NavBar"

function CoachingPage() {
  return (
    <>
      <NavBar />
      <CoachingHero />
      <WhatsIncluded />
      <CoachingPlans />
      <WhoIsThisFor />
      <HowToGetStarted />
      <Footer />
    </>
  )
}

export default CoachingPage
