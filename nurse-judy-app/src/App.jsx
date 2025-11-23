import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Merchandise from './pages/Merchandise'
import Study from './pages/Study'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import GivebackCircle from './pages/GivebackCircle'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import { AuthProvider } from './hooks/useAuth.jsx'
import './styles/global.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />
      case 'services':
        return <Services />
      case 'merchandise':
        return <Merchandise />
      case 'study':
        return <Study />
      case 'gallery':
        return <Gallery />
      case 'events':
        return <Events />
      case 'giveback':
        return <GivebackCircle />
      case 'about':
        return <About />
      default:
        return <Home onNavigate={setActiveSection} />
    }
  }

  return (
    <AuthProvider>
      <div className="app">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {renderSection()}
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
