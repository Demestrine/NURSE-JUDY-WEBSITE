import React from 'react'

const Events = () => {
  const events = [
    {
      id: 1,
      image: '/images/gallery/njk14.jpg',
      title: 'Beyond the Ward with Nurse Judy 2024',
      description: 'An inspirational gathering dedicated to empowering nurses beyond clinical settings. This event focused on career growth, mental wellness, and building supportive professional networks.',
      status: 'DONE',
      buttonText: 'DONE'
    },
    {
      id: 2,
      image: '/images/gallery/njk15.jpg',
      title: 'Beyond the Ward with Nurse Judy 2026',
      description: 'Upcoming nursing empowerment summit featuring leadership workshops, advanced clinical skills, and international career opportunities for healthcare professionals.',
      status: 'COMING SOON',
      buttonText: 'COMING SOON'
    },
    {
      id: 3,
      image: '/images/gallery/njk32.jpg',
      title: 'Rotary Club Mikocheni',
      description: 'Community health outreach program in collaboration with Rotary Club, providing free health screenings and medical education to underserved communities.',
      status: 'DONE',
      buttonText: 'DONE'
    },
    {
      id: 4,
      image: '/images/gallery/njk17.jpg',
      title: 'USRN Guidance Webinar',
      description: 'Comprehensive webinar series guiding international nurses through the US Registered Nurse certification process, visa requirements, and job placement strategies.',
      status: 'COMING SOON',
      buttonText: 'COMING SOON'
    }
  ]

  return (
    <div style={{ padding: '80px 5%', minHeight: '80vh' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '40px',
        textTransform: 'uppercase'
      }}>
        EVENTS & WORKSHOPS
      </h2>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {events.map(event => (
            <div key={event.id} style={{ 
              background: 'white', 
              borderRadius: '15px', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                height: '200px', 
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: event.id === 3 ? 'rotate(0deg)' : 'none'
              }}></div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ color: 'rgb(241, 7, 144)', marginBottom: '15px', fontSize: '1.3rem' }}>
                  {event.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
                  {event.description}
                </p>
                <button style={{
                  background: event.status === 'DONE' ? '#4CAF50' : 'rgb(241, 7, 144)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
