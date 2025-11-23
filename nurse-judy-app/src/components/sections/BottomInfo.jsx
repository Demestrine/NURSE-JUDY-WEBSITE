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
          <h3>Fully Responsive</h3>
          <h4>FITS EVERY SCREEN, EVERY STYLE</h4>
          <p>From phone to desktop - seamless, sleek, and effortlessly you.</p>
        </div>
        <div className="callout-item fade-in">
          <h3>Amazing Client Support</h3>
          <h4>ALWAYS IN TOUCH</h4>
          <p>I'm here for you every step of the way, providing timely assistance and guidance whenever you need it.</p>
        </div>
        <div className="callout-item fade-in">
          <h3>Easy To Customize</h3>
          <h4>MAKE IT YOUR OWN</h4>
          <p>Tailor the experience to fit your unique style and preferences with ease.</p>
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