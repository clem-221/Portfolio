import AboutMe from './components/AboutMe'
import BarreNavigation from './components/BarreNavigation'
import Contact from './components/Contact'
import ExperiencesProfessionnelles from './components/ExperiencesProfessionnelles'
import Footer from './components/Footer'
import Home from './components/Home'
import ParcoursAcademique from './components/ParcoursAcademique'
import Projets from './components/Projets'
import './index.css'

function App() {

  return (
    <div>
      <BarreNavigation />
      <div className="p-5 md:px-[5%]">
        <Home />
      </div>

      <AboutMe />
      <ParcoursAcademique />

      <ExperiencesProfessionnelles />
      <Projets />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App
