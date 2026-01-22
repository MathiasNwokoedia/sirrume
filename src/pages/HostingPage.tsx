import { Button } from '../components/Button';
import { Briefcase, Users, Music, Sparkles, Check } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HostingPageProps {
  onNavigate: (page: string) => void;
}

export function HostingPage({ onNavigate }: HostingPageProps) {
  const eventTypes = [
    { icon: <Briefcase size={32} />, title: 'Corporate', description: 'Professional events, product launches, conferences' },
    { icon: <Users size={32} />, title: 'Conferences', description: 'Industry summits, seminars, and workshops' },
    { icon: <Music size={32} />, title: 'Concerts', description: 'Live performances and entertainment events' },
    { icon: <Sparkles size={32} />, title: 'Private', description: 'Exclusive celebrations and gatherings' },
  ];

  const benefits = [
    'Professional and engaging stage presence',
    'Seamless event flow management',
    'Audience engagement and interaction',
    'Cultural sensitivity and adaptability',
    'Time management and schedule adherence',
    'Crisis management and improvisation',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Hosting Services</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              Elevate your event with professional MC and compere services that captivate and engage your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="text-gold mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-serif mb-2 text-charcoal">{type.title}</h3>
                <p className="text-sm text-charcoal/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="mb-8">Why Choose Sir Rume</h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                With over a decade of experience hosting events across multiple industries, Sir Rume brings unmatched professionalism, energy, and expertise to every engagement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-gold flex-shrink-0">
                      <Check size={20} />
                    </div>
                    <p className="text-charcoal/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-luxury-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGF1ZGllbmNlfGVufDF8fHx8MTc2ODkzMTAyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate event"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlight */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-12">Notable Events</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-luxury">
                <p className="font-serif text-xl text-charcoal mb-2">The Experience 2024</p>
                <p className="text-sm text-charcoal/60">Major Concert Event</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-luxury">
                <p className="font-serif text-xl text-charcoal mb-2">The Platform Africa</p>
                <p className="text-sm text-charcoal/60">Continental Conference</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-luxury">
                <p className="font-serif text-xl text-charcoal mb-2">Lagos Business School</p>
                <p className="text-sm text-charcoal/60">Executive Summit</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-luxury">
                <p className="font-serif text-xl text-charcoal mb-2">The Platform Nigeria</p>
                <p className="text-sm text-charcoal/60">National Conference</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">Book Sir Rume for Your Event</h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Make your next event unforgettable with professional hosting that engages and inspires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" onClick={() => onNavigate('bookings')}>
              Book Now
            </Button>
            <Button variant="outline" onClick={() => onNavigate('contact')}>
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}