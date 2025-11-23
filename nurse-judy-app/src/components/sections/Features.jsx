import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-check-circle',
      title: 'IMAGINE AND CREATE',
      description: 'Where nursing care meets lifestyle inspiration your health journey, beautifully told.'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'REMARKABLE STYLE',
      description: 'Transforming health narratives into compelling stories your journey, our passion.'
    },
    {
      icon: 'fas fa-feather-alt',
      title: 'SUPREME BLOGGING',
      description: 'Crafting insightful content that resonates with your lifestyle and wellness goals.'
    },
    {
      icon: 'fas fa-smile',
      title: 'EASY & FUN',
      description: 'Where nursing care meets lifestyle inspiration your health journey, beautifully told.'
    }
  ];

  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-item fade-in">
          <span className="icon"><i className={feature.icon}></i></span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;