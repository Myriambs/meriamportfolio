import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/layout/Loader'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Projects from '@/components/projects/Projects'
import Experience from '@/components/experience/Experience'
import Certifications from '@/components/certifications/Certifications'
import Contact from '@/components/contact/Contact'
import { useLenis } from '@/hooks/useLenis'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
