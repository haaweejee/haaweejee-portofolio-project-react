import Header from './components/Header.jsx'
import './App.css'
import Hero from './components/Hero.jsx'
import SocialMedia from './components/SocialMedia.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import ProjectHistory from './components/ProjectHistory.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <div className="hero-content">
        <SocialMedia />
        <Hero />
      </div>
      <WorkExperience />
      <ProjectHistory />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
