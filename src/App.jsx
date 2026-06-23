import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Awards from './components/Awards/Awards'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <div>
      <div className="hero-section">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Awards />
        <Projects />
        <Education />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App
