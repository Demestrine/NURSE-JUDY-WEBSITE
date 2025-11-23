import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <h2>NURSE JUDY</h2>
        <p className="description">
          A lifestyle space built on compassion, wellness, and professional nursing.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">450+</span>
            <span className="stat-label">Clients Served</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Success Stories</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
