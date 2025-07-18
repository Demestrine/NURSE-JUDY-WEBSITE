import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import judyPortrait from '@/assets/judy-portrait.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-gradient">Nurse Judy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about your nursing journey abroad? I'm here to help! Reach out and let's discuss how I can support your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="What can I help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Book a Consultation</SelectItem>
                          <SelectItem value="nclex">NCLEX Preparation Help</SelectItem>
                          <SelectItem value="visa">Visa & Immigration Questions</SelectItem>
                          <SelectItem value="career">Career Guidance</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell me about your current situation, goals, and how I can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">judy@nursejudy.com</p>
                    <p className="text-xs text-muted-foreground mt-1">I respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+254 700 123 456</p>
                    <p className="text-xs text-muted-foreground mt-1">WhatsApp available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                    <p className="text-xs text-muted-foreground mt-1">Available worldwide via video call</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9 AM - 6 PM EAT</p>
                    <p className="text-xs text-muted-foreground mt-1">Emergency consultations available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="btn-primary w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="card-elegant gradient-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Have Common Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out our frequently asked questions for quick answers.
                </p>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="card-elegant">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all messages within 24 hours, often much sooner!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Section with Judy's Photo */}
        <div className="mt-20">
          <Card className="card-elegant overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="order-2 lg:order-1 p-8 flex flex-col justify-center">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every successful nurse's international journey starts with a single conversation. 
                  I'm here to listen, understand your unique situation, and create a personalized 
                  roadmap to help you achieve your dreams.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personalized consultation within 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No obligation - just honest advice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Flexible scheduling to fit your timezone</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 image-frame h-80 lg:h-auto bg-cover bg-center lg:rounded-l-none" style={{ backgroundImage: `url(${judyPortrait})` }}>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;