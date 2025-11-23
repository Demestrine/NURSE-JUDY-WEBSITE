import React from 'react'

const Study = () => {
  const quizLinks = [
    {
      title: 'Neurological Assessment Disorders Quiz',
      url: 'https://nursejudykenursingquizes.my.canva.site/quiz-request-neurological-assessment-disorders',
      icon: 'fas fa-brain'
    },
    {
      title: 'Arrhythmias & Cardiac Emergencies Quiz',
      url: 'https://nursejudykenursingquizes.my.canva.site/arrhythmias-cardiac-emergencies-quiz',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Clinical Nursing Practice Quiz',
      url: 'https://nursejudykenursingquizes.my.canva.site/dagvd-oxpca',
      icon: 'fas fa-stethoscope'
    },
    {
      title: 'Advanced Nursing Assessment',
      url: 'https://nursejudykenursingquizes.my.canva.site/dagvulvzd38',
      icon: 'fas fa-clipboard-check'
    },
    {
      title: 'Patient Care Management Quiz',
      url: 'https://nursejudykenursingquizes.my.canva.site/dagvuu51rmy',
      icon: 'fas fa-user-md'
    },
    {
      title: 'Pharmacology Mastery Quiz',
      url: 'https://nursejudykenursingquizes.my.canva.site/pharmacology-nurse-judy-ke',
      icon: 'fas fa-pills'
    },
    {
      title: 'Monday Quiz Series',
      url: 'https://nursejudykequizesmonday.netlify.app/',
      icon: 'fas fa-calendar-day'
    },
    {
      title: 'Wednesday Quiz Series',
      url: 'https://nursejudyke-wednesday.netlify.app/',
      icon: 'fas fa-calendar-day'
    },
    {
      title: 'Monday Nursing Quiz',
      url: 'https://98mondaynursejudyke.netlify.app/',
      icon: 'fas fa-calendar-alt'
    },
    {
      title: 'Thursday Quiz Series',
      url: 'https://thursdaynursejudykequiz.netlify.app/',
      icon: 'fas fa-calendar-alt'
    },
    {
      title: 'September Wednesday Quiz',
      url: 'https://septwednesdatynjkquizes.netlify.app/',
      icon: 'fas fa-calendar'
    },
    {
      title: 'September Friday Quiz',
      url: 'https://septfridaynjkquizes.netlify.app/',
      icon: 'fas fa-calendar'
    },
    {
      title: 'Interactive Nursing Quiz',
      url: 'https://superlative-squirrel-a17d1a.netlify.app/',
      icon: 'fas fa-laptop-medical'
    },
    {
      title: 'Thursday Matching Quiz',
      url: 'https://thurdaymatchingquizzes.netlify.app/',
      icon: 'fas fa-puzzle-piece'
    }
  ]

  return (
    <div style={{ padding: '80px 5%', minHeight: '80vh' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '40px',
        textTransform: 'uppercase'
      }}>
        STUDY MATERIALS & QUIZZES
      </h2>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
        Comprehensive learning resources and interactive quizzes to enhance your nursing knowledge
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {quizLinks.map((quiz, index) => (
          <a
            key={index}
            href={quiz.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              background: '#f8f8f8',
              borderRadius: '10px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgb(241, 7, 144)'
              e.target.style.color = 'white'
              e.target.style.borderColor = 'rgb(241, 7, 144)'
              e.target.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#f8f8f8'
              e.target.style.color = 'inherit'
              e.target.style.borderColor = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <i className={quiz.icon} style={{ fontSize: '24px', width: '30px' }}></i>
            <span style={{ fontWeight: '600', fontSize: '1rem' }}>{quiz.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Study
