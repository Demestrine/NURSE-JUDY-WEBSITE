import React from 'react';

const BottomInfo = () => {
  const skills = [
    { label: 'NURSING & HEALTH EDUCATION', percentage: 99 },
    { label: 'LIFESTYLE & WELLNESS CONTENT', percentage: 98 },
    { label: 'FASHION & STYLE INFLUENCE', percentage: 95 },
    { label: 'BLOGGING & STORYTELLING', percentage: 99 }
  ];

  return (
    <section className="bottom-info">
      <div className="callouts">
        <div className="callout-item fade-in">
          <h3>Nursing Care</h3>
          <h4>MINDFUL HEALTH </h4>
          <p>Blending clinical expertise with compassionate support to guide your complete wellness journey with confidence and care.</p>
        </div>
        <div className="callout-item fade-in">
          <h3>Dedicated Health Advocacy</h3>
          <h4>YOUR WELLNESS COMPANION</h4>
          <p>Always present with nurturing guidance and professional support for every step of your health and lifestyle transformation.</p>
        </div>
        <div className="callout-item fade-in">
          <h3>Individualized Care Experience</h3>
          <h4>PERSONALIZED FOR YOUR PATH</h4>
          <p>Custom health solutions and lifestyle adaptations crafted specifically for your unique wellness needs and life circumstances.</p>
        </div>
      </div>
      
      <div className="skills-block">
        <div className="skills-content slide-in-right">
          <p className="section-tag">Details & Precision</p>
          <h2>WHAT I'M GOOD AT</h2>
          {skills.map((skill, index) => (
            <div key={index} className="progress-bar-container">
              <label>{skill.label}</label>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span>{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomInfo;