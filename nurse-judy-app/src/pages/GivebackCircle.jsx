import React from 'react'

const GivebackCircle = () => {
  return (
    <div style={{ padding: '80px 5%', minHeight: '80vh' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '40px',
        textTransform: 'uppercase'
      }}>
        NURSE JUDY GIVEBACK CIRCLE
      </h2>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '50px', maxWidth: '600px', margin: '0 auto' }}>
        Extending Compassion Beyond Healthcare - A foundation for helping those in need
      </p>

      {/* Mission & Vision */}
      <div style={{ maxWidth: '1000px', margin: '0 auto 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ padding: '30px', background: '#f8f8f8', borderRadius: '15px', textAlign: 'center' }}>
          <i className="fas fa-bullseye" style={{ fontSize: '3rem', color: 'rgb(241, 7, 144)', marginBottom: '20px' }}></i>
          <h3 style={{ color: 'rgb(241, 7, 144)', marginBottom: '15px' }}>Our Mission</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            To provide essential support to underprivileged communities through food distribution, 
            educational sponsorships, clothing drives, and basic needs assistance.
          </p>
        </div>
        
        <div style={{ padding: '30px', background: '#f8f8f8', borderRadius: '15px', textAlign: 'center' }}>
          <i className="fas fa-eye" style={{ fontSize: '3rem', color: 'rgb(241, 7, 144)', marginBottom: '20px' }}></i>
          <h3 style={{ color: 'rgb(241, 7, 144)', marginBottom: '15px' }}>Our Vision</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            A world where every individual has access to basic necessities and education opportunities, 
            breaking the cycle of poverty through collective action.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '40px',
          textTransform: 'uppercase'
        }}>
          WHAT WE PROVIDE
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '25px', background: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <i className="fas fa-utensils" style={{ fontSize: '2.5rem', color: 'rgb(241, 7, 144)', marginBottom: '15px' }}></i>
            <h4 style={{ marginBottom: '10px' }}>Food Assistance</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Monthly food distribution to families in need</p>
          </div>
          
          <div style={{ padding: '25px', background: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <i className="fas fa-graduation-cap" style={{ fontSize: '2.5rem', color: 'rgb(241, 7, 144)', marginBottom: '15px' }}></i>
            <h4 style={{ marginBottom: '10px' }}>School Fees & Supplies</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Educational sponsorships and learning materials</p>
          </div>
          
          <div style={{ padding: '25px', background: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <i className="fas fa-tshirt" style={{ fontSize: '2.5rem', color: 'rgb(241, 7, 144)', marginBottom: '15px' }}></i>
            <h4 style={{ marginBottom: '10px' }}>Clothing Drives</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Quality clothing for children and adults</p>
          </div>
          
          <div style={{ padding: '25px', background: 'white', borderRadius: '10px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <i className="fas fa-hand-holding-heart" style={{ fontSize: '2.5rem', color: 'rgb(241, 7, 144)', marginBottom: '15px' }}></i>
            <h4 style={{ marginBottom: '10px' }}>Healthcare Support</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Medical assistance and health education</p>
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: '#f8f8f8', borderRadius: '15px', maxWidth: '600px', margin: '60px auto 0' }}>
        <h3 style={{ color: 'rgb(241, 7, 144)', marginBottom: '20px' }}>Join Our Circle of Compassion</h3>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Whether you want to volunteer or partner with us, every contribution makes a difference.
        </p>
        <a 
          href="https://wa.me/254796523141?text=Hi%20Nurse%20Judy!%20I%20want%20to%20join%20the%20Giveback%20Circle"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'rgb(241, 7, 144)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#000'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgb(241, 7, 144)'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
          Join via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default GivebackCircle
