import { About } from "../components/About"
import { BookForm } from "../components/BookForm"
import { Gallery } from "../components/Gallery"
import { Hero } from "../components/Hero"
import { Services } from "../components/Services"


export const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BookForm />
    </main>
  )
}