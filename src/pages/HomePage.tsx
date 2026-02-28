import { About } from "../components/About"
import { Awards } from "../components/Awards"
import { Footer } from "../components/Footer"
import { Gallery } from "../components/Gallery"
import { Hero } from "../components/Hero"
import { Reviews } from "../components/Reviews"
import { Services } from "../components/Services"
import { ScrollToTop } from "../features/ScrollToTop"


export const HomePage = () => {
  return (
    <main>

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Awards />
      <Reviews />
      <Footer />
      <ScrollToTop/>
    </main>
  )
}