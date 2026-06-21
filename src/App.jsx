import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import LoadingScreen from './components/sections/LoadingScreen'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <LoadingScreen />
        <Navbar />
        <main>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Services />} path="/services" />
            <Route element={<Gallery />} path="/gallery" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
