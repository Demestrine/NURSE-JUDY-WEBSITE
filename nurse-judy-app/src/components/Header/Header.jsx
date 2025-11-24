import React, { useState } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'merchandise', label: 'MERCHANDISE' },
    { id: 'study', label: 'STUDY' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'events', label: 'EVENTS' },
    { id: 'giveback', label: 'GIVEBACK CIRCLE' },
    { id: 'about', label: 'ABOUT' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Show back button only when NOT on home page
  const showBackButton = activeSection !== 'home';

  return (
    <header className="main-header">
      <nav className="main-nav">
        {/* Back button - only shows when not on home page */}
        {showBackButton && (
          <div 
            className="back-button"
            onClick={() => setActiveSection('home')}
            title="Back to Home"
          >
            ← Back
          </div>
        )}

        {/* Hamburger menu button */}
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Desktop navigation - shows all items */}
        <ul className="nav-links desktop-nav">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href="#"
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile dropdown menu */}
        <div className={`mobile-dropdown ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href="#"
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;