import { useState } from 'react';
import { Calendar, Clock, Video, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { value: 'consultation', label: 'One-on-One Consultation - $79', duration: '60 min' },
    { value: 'nclex', label: 'NCLEX Preparation - $299', duration: '8 weeks' },
    { value: 'visa', label: 'Visa & Immigration Guidance - $199', duration: '4 weeks' },
    { value: 'career', label: 'Career Coaching - $149', duration: '6 weeks' },
    { value: 'document', label: 'Document Review - $99', duration: '1 week' },
    { value: 'complete', label: 'Complete Success Package - $699', duration: '6 months' }
  ];

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Book Your <span className="text-gradient">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? Schedule your personalized consultation and let's create your path to international nursing success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Schedule Your Session</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <Label htmlFor="service">Select Service</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time..." />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Current Situation */}
                  <div>
                    <Label htmlFor="currentSituation">Tell me about your current situation</Label>
                    <Textarea 
                      id="currentSituation"
                      placeholder="Share your nursing background, goals, and what challenges you're facing..."
                      rows={4}
                    />
                  </div>

                  {/* Specific Goals */}
                  <div>
                    <Label htmlFor="goals">What are your specific goals?</Label>
                    <Textarea 
                      id="goals"
                      placeholder="Which countries are you interested in? What timeline do you have in mind?"
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="btn-primary w-full" size="lg">
                    Book My Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Consultation Details */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>Consultation Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">60-minute session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Video call via Zoom</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Follow-up email summary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Personalized action plan</span>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>✓ Assessment of your current qualifications</p>
                <p>✓ Discussion of your career goals and timeline</p>
                <p>✓ Country-specific requirements and opportunities</p>
                <p>✓ Personalized roadmap for your journey</p>
                <p>✓ Resource recommendations and next steps</p>
                <p>✓ Q&A session for all your concerns</p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">judy@nursejudy.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">+254 700 123 456</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Available Monday-Friday, 9 AM - 6 PM EAT
                </p>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="card-elegant gradient-card">
              <CardContent className="text-center p-6">
                <CheckCircle className="w-12 h-12 text-accent-deep mx-auto mb-4" />
                <h3 className="font-semibold mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  If you're not completely satisfied with your consultation, I'll refund your money within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How soon can I book a consultation?",
                answer: "I typically have availability within 3-5 business days. For urgent matters, please contact me directly."
              },
              {
                question: "What if I need to reschedule?",
                answer: "You can reschedule up to 24 hours before your appointment without any fees."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, I offer flexible payment plans for all services. We can discuss options during your consultation."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Absolutely! I offer a 100% satisfaction guarantee. If you're not happy, I'll refund your consultation fee."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;