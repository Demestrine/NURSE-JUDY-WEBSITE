import React from 'react';

const About = () => {
  const missions = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education First',
      description: 'Providing comprehensive, accessible education to help nurses at every stage of their career journey, from students to experienced professionals.'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Personalized Support',
      description: 'Offering tailored guidance and one-on-one support to ensure every nurse receives the specific help they need to achieve their goals.'
    },
    {
      icon: 'fas fa-globe-americas',
      title: 'Global Community',
      description: 'Building a worldwide network of nursing professionals who support, inspire, and learn from each other across borders and cultures.'
    }
  ];

  return (
    <section id="about" className="dynamic-section active">
      <div className="section-header">
    
        <button className="close-section">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="about-content-section">
        <div className="about-story">
          <h2>MY JOURNEY</h2>
          <p>
            Welcome to my world! I'm Nurse Judy KE, a passionate healthcare professional dedicated to helping international nurses achieve their dreams of working in the United States. With years of experience in nursing and healthcare education, I understand the challenges and opportunities that come with pursuing an international nursing career.
          </p>
          
          <p>
            My journey began with a simple mission: to make the complex process of international nursing certification more accessible and understandable. Through personalized guidance, comprehensive resources, and continuous support, I've helped numerous nurses navigate the CGFNS, NCLEX, and visa processes successfully.
          </p>
          
          <p>
            Beyond nursing guidance, I'm also a content creator and influencer, sharing my expertise and experiences across multiple platforms. I believe in the power of education, community, and mentorship to transform lives and advance healthcare globally.
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((mission, index) => (
            <div key={index} className="mission-card">
              <div className="mission-icon">
                <i className={mission.icon}></i>
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;