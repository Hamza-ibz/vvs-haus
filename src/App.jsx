import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/sections/LoadingScreen'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Gallery from './components/sections/Gallery'
import BeforeAfter from './components/sections/BeforeAfter'
import SocialMedia from './components/sections/SocialMedia'
import Booking from './components/sections/Booking'
import FinalCTA from './components/sections/FinalCTA'
import './App.css'

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Gallery />
      <BeforeAfter />
      <SocialMedia />
      <Booking />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
