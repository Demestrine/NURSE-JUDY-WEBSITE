import { Heart, Award, Users, Globe, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import judyPortrait from '@/assets/judy-portrait.jpg';
import judyStudying from '@/assets/judy-studying.jpg';
import judySuccess from '@/assets/judy-success.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Nurse Judy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey from a passionate nursing student in Kenya to helping hundreds of nurses achieve their international dreams
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              My Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I graduated from the University of Nairobi with a Bachelor's degree in Nursing in 2012. Like many Kenyan nurses, I dreamed of expanding my horizons and working internationally to gain new experiences and better opportunities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The journey wasn't easy. I faced countless challenges navigating the complex process of NCLEX preparation, visa applications, and understanding different healthcare systems. But through persistence, dedication, and the right guidance, I successfully moved to work in the United States in 2015.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After experiencing the transformation that working abroad brought to my career and life, I knew I had to help other Kenyan nurses achieve the same success. That's why I started offering consultations and guidance in 2018.
            </p>
          </div>
          <div className="relative">
            <div className="image-frame w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${judyPortrait})` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
          </div>
        </div>

        
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="image-frame h-64 bg-cover bg-center" style={{ backgroundImage: `url(${judyStudying})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Always Learning</h3>
              <p className="text-sm opacity-90">Continuous education is key to success</p>
            </div>
          </div>
          <div className="image-frame h-64 bg-cover bg-center" style={{ backgroundImage: `url(${judySuccess})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Celebrating Success</h3>
              <p className="text-sm opacity-90">Every achievement matters</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            My Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, number: "500+", label: "Nurses Mentored" },
              { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Countries" },
              { icon: <Award className="w-8 h-8" />, number: "98%", label: "NCLEX Pass Rate" },
              { icon: <Star className="w-8 h-8" />, number: "5.0", label: "Client Rating" }
            ].map((achievement, index) => (
              <Card key={index} className="card-elegant text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="card-elegant p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl font-bold">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Kenyan nurses with the knowledge, confidence, and support they need to successfully transition to international nursing careers, creating a bridge between local talent and global opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant p-8">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl font-bold">My Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personalized guidance for each nurse's unique journey</li>
                <li>• Honest, transparent advice and realistic expectations</li>
                <li>• Continuous support throughout the entire process</li>
                <li>• Celebrating every success as my own</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Preview */}
        <div className="mt-20 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
            What Nurses Say About Working With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Wanjiku",
                country: "Now in Canada",
                text: "Judy's guidance was invaluable. She helped me navigate every step from NCLEX prep to landing my dream job in Toronto. I couldn't have done it without her!"
              },
              {
                name: "David Kimani",
                country: "Now in Australia",
                text: "The personalized consultation sessions gave me the confidence I needed. Judy's experience and insights made all the difference in my journey."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-elegant p-6">
                <CardContent className="space-y-4 text-left">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;