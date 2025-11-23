import React, { useRef, useState, useEffect } from 'react'
import './ScrollableCards.css'

const ScrollableCards = ({ onNavigate }) => {
  const scrollContainerRef = useRef(null)
  const [activeCard, setActiveCard] = useState('services')

  const cards = [
    {
      id: 'services',
      image: '/images/gallery/njk6.jpg',
      category: 'Professional Guidance',
      title: 'SERVICES'
    },
    {
      id: 'merchandise',
      image: '/images/gallery/njk7.jpg',
      category: 'Exclusive Collection',
      title: 'MERCHANDISE'
    },
    {
      id: 'study',
      image: '/images/gallery/njk30.jpg',
      category: 'Learning Resources',
      title: 'STUDY'
    },
    {
      id: 'gallery',
      image: '/images/gallery/njk19.jpg',
      category: 'Visual Journey',
      title: 'GALLERY'
    },
    {
      id: 'events',
      image: '/images/gallery/njk14.jpg',
      category: 'Workshops & Activities',
      title: 'EVENTS'
    },
    {
      id: 'giveback',
      image: '/images/gallery/njk31.jpg',
      category: 'Community Support',
      title: 'GIVEBACK CIRCLE'
    },
    {
      id: 'about',
      image: '/images/gallery/njk3.jpg',
      category: 'My Story',
      title: 'ABOUT'
    }
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleCardClick = (sectionId) => {
    setActiveCard(sectionId)
    if (onNavigate) {
      onNavigate(sectionId)
    }
  }

  // Add scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="scrollable-cards-section">
      <div className="category-intro fade-in">
        <p className="section-tag">Explore My World</p>
        <h2>DISCOVER NURSE JUDY</h2>
        <p>Click on any card to explore our services, content, and offerings</p>
      </div>

      <div className="scrollable-container" ref={scrollContainerRef}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`scrollable-card ${activeCard === card.id ? 'active' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            <div 
              className="scrollable-card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="scrollable-card-content">
              <p>{card.category}</p>
              <h4>{card.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-controls">
        <button className="scroll-btn" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="scroll-btn" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}

export default ScrollableCards
