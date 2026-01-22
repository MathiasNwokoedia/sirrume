import { Button } from '../components/Button';
import { Mail, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              Ready to transform your team or event? Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 text-charcoal">Email</h4>
                    <a
                      href="mailto:info@sirrume.com"
                      className="text-charcoal/70 hover:text-gold transition-colors"
                    >
                      info@sirrume.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 text-charcoal">Instagram</h4>
                    <a
                      href="https://instagram.com/sir_rume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/70 hover:text-gold transition-colors"
                    >
                      @sir_rume
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 text-charcoal">WhatsApp</h4>
                    <a
                      href="https://wa.me/2348012345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/70 hover:text-gold transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 text-charcoal">Location</h4>
                    <p className="text-charcoal/70">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-cream p-8 rounded-2xl shadow-luxury">
                <h3 className="text-2xl font-serif mb-6 text-charcoal">Quick Links</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => onNavigate('bookings')}
                    className="block w-full text-left text-charcoal/70 hover:text-gold transition-colors"
                  >
                    → Book a Session
                  </button>
                  <button
                    onClick={() => onNavigate('talent-rescue')}
                    className="block w-full text-left text-charcoal/70 hover:text-gold transition-colors"
                  >
                    → Register for Talent Rescue
                  </button>
                  <button
                    onClick={() => onNavigate('hosting')}
                    className="block w-full text-left text-charcoal/70 hover:text-gold transition-colors"
                  >
                    → Event Hosting Services
                  </button>
                  <button
                    onClick={() => onNavigate('coaching')}
                    className="block w-full text-left text-charcoal/70 hover:text-gold transition-colors"
                  >
                    → Coaching Programs
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-charcoal p-8 lg:p-10 rounded-2xl shadow-luxury-lg">
                <h3 className="text-2xl font-serif mb-6 text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white/70 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="" className="bg-charcoal">Select a subject</option>
                      <option value="hosting" className="bg-charcoal">Event Hosting</option>
                      <option value="coaching" className="bg-charcoal">Coaching Services</option>
                      <option value="talent-rescue" className="bg-charcoal">Talent Rescue Program</option>
                      <option value="corporate" className="bg-charcoal">Corporate Training</option>
                      <option value="other" className="bg-charcoal">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-12">Our Location</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/50 rounded-2xl overflow-hidden shadow-luxury-lg h-[400px] flex items-center justify-center">
              <div className="text-center text-charcoal/50">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg">Lagos, Nigeria</p>
                <p className="text-sm">Map integration available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">Ready to Get Started?</h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Whether you need a host for your event or coaching for your team, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" onClick={() => onNavigate('bookings')}>
              Book Now
            </Button>
            <Button variant="outline" onClick={() => window.open('https://wa.me/2348012345678', '_blank')}>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
