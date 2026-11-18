import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { FinalProject } from './components/FinalProject'
import { Projects } from './components/Projects'
import { Contact, Footer } from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FinalProject />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
