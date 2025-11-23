import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';
import AuthModal from '../Auth/AuthModal';
import NotificationSection from '../Auth/NotificationSection';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  const { currentUser, logout, notifications } = useAuth();

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

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <header className="main-header">
      {/* Auth Section */}
      {!currentUser ? (
        <div className="auth-section">
          <a href="#" onClick={() => handleAuthClick('login')}>LOGIN</a>
          <a href="#" onClick={() => handleAuthClick('register')}>REGISTER</a>
        </div>
      ) : (
        <div className="user-welcome active">
          <span>Welcome, {currentUser}!</span>
          <a href="#" onClick={() => setIsNotificationOpen(!isNotificationOpen)} style={{ position: 'relative' }}>
            <i className="fas fa-bell"></i>
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </a>
          <a href="#" onClick={logout}>LOGOUT</a>
        </div>
      )}

      {/* Notification Panel */}
      <NotificationSection 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />

      {/* Main Navigation */}
      <nav className="main-nav">
        <h1 className="logo">NURSE JUDY</h1>
        
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

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </header>
  );
};

export default Header;
