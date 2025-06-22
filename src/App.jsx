import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import ProjectHistory from './components/ProjectHistory.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen m-0 p-8 font-sans font-normal leading-[1.5] text-white bg-[url('/background.svg')] bg-no-repeat bg-top bg-cover">
      <Header />
      <Hero />
      <WorkExperience />
      <ProjectHistory />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
