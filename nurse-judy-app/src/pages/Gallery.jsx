import React from 'react'

const Gallery = () => {
  const galleryImages = [
    '/images/gallery/njk4.jpg',
    '/images/gallery/njk7.jpg',
    '/images/gallery/njk3.jpg',
    
    '/images/gallery/njk10.jpg',
    '/images/gallery/njk26.jpg',
    '/images/gallery/njk9.jpg',
    '/images/gallery/njk32.jpg',
    '/images/gallery/njk23.jpg',
    
    '/images/gallery/njk19.jpg',
    '/images/gallery/njk8.jpg',
  
    '/images/gallery/njk22.jpg',
    '/images/gallery/njk3.jpg',
    '/images/gallery/njk24.jpg',
    '/images/gallery/njk25.jpg',
    '/images/gallery/njk18.jpg',
    '/images/gallery/njk27.jpg',
    '/images/gallery/njk28.jpg',
    '/images/gallery/njk29.jpg',
    '/images/gallery/njk30.jpg',
    '/images/gallery/njk31.jpg',
  ]

  return (
    <div style={{ padding: '80px 5%', minHeight: '80vh' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '40px',
        textTransform: 'uppercase'
      }}>
        PHOTO GALLERY
      </h2>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
        Visual journey through Nurse Judy's professional life, events, and community engagements
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {galleryImages.map((image, index) => (
          <div key={index} style={{ 
            borderRadius: '15px',
            overflow: 'hidden',
            aspectRatio: '1',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
