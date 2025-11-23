import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Certification & Registration',
      description: 'Guidance through the essential certification and registration processes for nursing in the US.',
      features: [
        'Guidance on CGFNS registration',
        'Guidance on NCLEX preparation',
        'ATT application assistance'
      ]
    },
    {
      title: 'Documentation & Verification',
      description: 'Expert assistance with document preparation and verification processes.',
      features: [
        'Verification of documents guidance',
        'Credential evaluation support',
        'Application documentation review'
      ]
    },
    {
      title: 'Exams & Sponsorship',
      description: 'Preparation support and guidance for key requirements and opportunities.',
      features: [
        'Preparation for IELTS exams',
        'Guidance with Greencard sponsorship hospitals',
        'Visa process consultation'
      ]
    }
  ];

  return (
    <section id="services" className="dynamic-section active">
      <div className="section-header">
        <h2>Services</h2>
        <button className="close-section">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>
                  <i className="fas fa-check-circle"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href="https://wa.me/254796523141" target="_blank" rel="noopener noreferrer" className="btn">
        Book a Session
      </a>
    </section>
  );
};

export default Services;