import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Globe, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-nurse-judy.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary-vibrant/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Journey to
            <span className="block text-secondary">Nursing Abroad</span>
            Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Judy! I help passionate Kenyan nurses achieve their dreams of working internationally through personalized consultations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Nurses Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Judy Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Meet <span className="text-gradient">Nurse Judy</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 10 years of nursing experience and having successfully navigated my own journey from Kenya to working internationally, I understand the challenges and opportunities that lie ahead.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've helped hundreds of nurses achieve their dreams of working abroad, from NCLEX preparation to visa guidance and everything in between. Your success is my mission.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">Rated 5.0 by 200+ clients</span>
              </div>
              <Link to="/about">
                <Button className="btn-secondary">
                  Learn My Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="image-frame w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 gradient-fun rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    JN
                  </div>
                  <p className="text-muted-foreground font-medium">Judy's Photo Coming Soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              How I Can Help You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support for every step of your nursing abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "NCLEX Preparation",
                description: "Complete guidance and study plans to pass your NCLEX on the first try"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Visa & Immigration",
                description: "Navigate complex visa processes with expert guidance and support"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Career Coaching",
                description: "Resume building, interview prep, and job placement assistance"
              }
            ].map((service, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation today and take the first step towards your international nursing career
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4">
              Book Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
