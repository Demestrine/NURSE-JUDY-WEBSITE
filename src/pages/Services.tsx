import { CheckCircle, Globe, Users, FileText, Video, Heart, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "NCLEX Preparation",
      description: "Comprehensive preparation program to help you pass NCLEX-RN on your first attempt",
      features: [
        "Personalized study plan based on your current knowledge",
        "Practice questions and mock exams",
        "Weekly progress assessments",
        "Test-taking strategies and tips",
        "One-on-one coaching sessions"
      ],
      price: "$299",
      duration: "8 weeks",
      popular: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Visa & Immigration Guidance",
      description: "Expert guidance through complex visa and immigration processes",
      features: [
        "Document preparation assistance",
        "Visa application review",
        "Interview preparation",
        "Timeline planning",
        "Country-specific requirements"
      ],
      price: "$199",
      duration: "4 weeks"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Coaching",
      description: "Professional development and job placement assistance",
      features: [
        "Resume and CV optimization",
        "Interview coaching and practice",
        "Job search strategies",
        "Networking guidance",
        "Salary negotiation tips"
      ],
      price: "$149",
      duration: "6 weeks"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Review",
      description: "Professional review of all your nursing documents and credentials",
      features: [
        "Transcript evaluation",
        "License verification",
        "Document authentication",
        "Missing requirement identification",
        "Step-by-step completion guide"
      ],
      price: "$99",
      duration: "1 week"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "One-on-One Consultation",
      description: "Personalized consultation session to address your specific needs",
      features: [
        "60-minute video call",
        "Personalized action plan",
        "Resource recommendations",
        "Follow-up email summary",
        "30-day email support"
      ],
      price: "$79",
      duration: "1 session"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Complete Success Package",
      description: "All-inclusive package for your complete journey abroad",
      features: [
        "All services above included",
        "Priority support",
        "Unlimited consultations for 6 months",
        "Job placement guarantee",
        "Money-back guarantee"
      ],
      price: "$699",
      duration: "6 months",
      bestValue: true
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
          My <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Comprehensive support packages designed to guide you through every step of your international nursing journey
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>5.0 Rating</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>500+ Nurses Helped</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>98% Success Rate</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-elegant relative ${service.popular ? 'ring-2 ring-primary' : ''} ${service.bestValue ? 'ring-2 ring-secondary-vibrant' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              {service.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-vibrant text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="text-center mt-4">
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                  <div className="text-sm text-muted-foreground">{service.duration}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-deep mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="block">
                  <Button 
                    className={`w-full ${service.bestValue ? 'btn-secondary' : 'btn-primary'}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Your journey in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Book Consultation", description: "Schedule your initial consultation to discuss your goals and current situation" },
            { step: "02", title: "Get Your Plan", description: "Receive a personalized roadmap tailored to your specific needs and timeline" },
            { step: "03", title: "Start Learning", description: "Begin your preparation with guided support and regular check-ins" },
            { step: "04", title: "Achieve Success", description: "Land your dream nursing job abroad with our continued support" }
          ].map((process, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                {process.step}
              </div>
              <h3 className="font-semibold text-lg">{process.title}</h3>
              <p className="text-muted-foreground text-sm">{process.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <Card className="card-elegant p-8 gradient-card">
          <CardContent className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a consultation today and let's create your personalized path to international nursing success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-primary">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Ask Questions
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Services;