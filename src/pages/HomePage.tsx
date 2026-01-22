import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { Mic, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Sir Rume transformed our team's approach to customer service. His training was impactful and results-driven.",
      author: "Corporate Client",
      company: "Leading Financial Institution",
    },
    {
      quote: "An exceptional host who brings professionalism and energy to every event. Highly recommended!",
      author: "Event Organizer",
      company: "Lagos Business Summit",
    },
    {
      quote: "The Talent Rescue program saved our company from losing valuable employees. A game-changing intervention.",
      author: "HR Director",
      company: "Retail Company",
    },
  ];

  const clientLogos = [
    'Uber',
    'Paga',
    'Guaranty Trust Bank Plc',
    'FoodCo',
    'NOIR',
    'Nok by Alara',
    'American International School Lagos',
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwc3RhZ2V8ZW58MXx8fHwxNzY4OTk4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center relative z-10">
          <h1 className="mb-6">SIR RUME</h1>
          <p className="text-xl lg:text-2xl text-charcoal/70 mb-4 tracking-wide">
            MC • Host • Life Coach • Corporate Trainer • Public Speaker
          </p>
          <p className="text-3xl lg:text-5xl font-serif text-gold mb-12 tracking-wide">
            Speak to Shift
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Button onClick={() => onNavigate('bookings')}>Book Me</Button>
            <Button variant="outline" onClick={() => onNavigate('coaching')}>
              Register for Coaching
            </Button>
            <Button variant="outline" onClick={() => onNavigate('talent-rescue')}>
              Join Talent Rescue
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-2xl lg:text-4xl font-serif text-center max-w-4xl mx-auto leading-relaxed text-charcoal/90 italic">
            A trainer and compere speaking to shift the paradigm of Nigerian and African professionals in their approach to work and service.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Hosting"
              description="Professional MC and compere services for corporate events, weddings, conferences, and concerts."
              icon={<Mic size={40} />}
              onClick={() => onNavigate('hosting')}
            />
            <ServiceCard
              title="Coaching & Training"
              description="One-on-one coaching, group sessions, and corporate training focused on career development and emotional intelligence."
              icon={<Users size={40} />}
              onClick={() => onNavigate('coaching')}
            />
            <ServiceCard
              title="Talent Rescue Program"
              description="Corporate intervention to transform underperforming employees and shift workplace culture."
              icon={<TrendingUp size={40} />}
              onClick={() => onNavigate('talent-rescue')}
            />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="text-center mb-12 text-charcoal/50 uppercase tracking-widest text-sm">
            Trusted By Leading Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-center p-4 text-charcoal/60 hover:text-gold transition-colors"
              >
                <p className="text-sm font-medium">{logo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 lg:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16 text-white">What Clients Say</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white/5 p-12 lg:p-16 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl lg:text-3xl font-serif mb-8 text-white/90 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="text-gold">
                <p className="font-medium">{testimonials[currentTestimonial].author}</p>
                <p className="text-sm text-white/60">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index ? 'w-8 bg-gold' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-8 text-charcoal">Build Better People. Build Better Businesses.</h2>
          <Button variant="secondary" onClick={() => onNavigate('contact')}>
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}