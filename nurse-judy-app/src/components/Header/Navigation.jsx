import React, { useState } from 'react'
import { NAV_ITEMS } from '../../lib/constants'
import './Navigation.css'

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="main-nav">
      <h1 className="logo">NURSE JUDY</h1>
      
      <div 
        className="hamburger" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>
      
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <a 
              href="#" 
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
