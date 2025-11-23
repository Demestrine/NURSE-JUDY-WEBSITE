import React from 'react';

const AboutPreview = () => {
  return (
    <section className="about-section">
      <div className="about-content slide-in-left">
        <p className="section-tag">ABOUT NURSE JUDY | READ MORE</p>
        <h2>ME</h2>
        <p className="text-block">
          I'm Nurse Judy , a registered nurse with a passion for blending healthcare and lifestyle. 
          I believe wellness should feel natural, beautiful, and a little bit fun. Here, I share 
          my journey, practical nursing tips, and everyday inspiration to help you live healthy, 
          confident, and stylish inside and out.
        </p>
      
      </div>
      <div className="about-image-wrapper slide-in-right">
        <img 
          className="about-image" 
          src="/images/merchandise/njk4b.jpg" 
          alt="About Nurse Judy" 
        />
      </div>
    </section>
  );
};

export default AboutPreview;