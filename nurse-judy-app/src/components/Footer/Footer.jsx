import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@nursejudyke' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/nurse_judy_ke' },
    { icon: 'fab fa-youtube', url: 'https://youtube.com/@triplelbynursejudyke' },
    { icon: 'fab fa-facebook-f', url: '#' }
  ];

  return (
    <footer className="footer">

      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; 2025 Nurse Judy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
