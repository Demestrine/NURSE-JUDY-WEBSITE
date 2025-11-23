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

  return (
    <header className="main-header">
      {/* REMOVED: Welcome banner completely */}

      {/* Main Navigation */}
      <nav className="main-nav">
        {/* REMOVED: Nurse Judy logo completely */}

        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="fas fa-bars"></i>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="navLinks">
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
      </nav>
    </header>
  );
};

export default Header;
