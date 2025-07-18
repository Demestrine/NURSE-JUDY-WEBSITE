import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-playfair font-bold text-xl">Nurse Judy</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering nurses to achieve their dreams of working abroad through expert guidance and support.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-secondary transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-secondary transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-secondary transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Judy</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/booking" className="hover:text-secondary transition-colors">Book Consultation</Link></li>
              <li><Link to="/shop" className="hover:text-secondary transition-colors">Shop</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-secondary transition-colors">NCLEX Preparation</li>
              <li className="hover:text-secondary transition-colors">Visa Guidance</li>
              <li className="hover:text-secondary transition-colors">Resume Review</li>
              <li className="hover:text-secondary transition-colors">Interview Coaching</li>
              <li className="hover:text-secondary transition-colors">Career Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>judy@nursejudy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-primary-foreground/80">
            © 2024 Nurse Judy. All rights reserved. Made with ❤️ for nurses worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;