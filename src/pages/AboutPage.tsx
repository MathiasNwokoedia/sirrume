import { Target, Heart, Lightbulb } from 'lucide-react';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const missionBlocks = [
    {
      icon: <Target size={40} />,
      title: 'Influence African Work Culture',
      description: 'Transforming how professionals across Nigeria and Africa approach their work, service delivery, and professional excellence.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Build Emotional Intelligence',
      description: 'Empowering individuals to develop deeper self-awareness and emotional mastery in their careers and relationships.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Shift Mindset Around Service',
      description: 'Creating a new paradigm where exceptional service and work ethic become the standard across industries.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Sir Rume</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70 italic">
              Transforming African service culture, one professional at a time
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-8">The Journey</h2>
              <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg">
                <p>
                  Osarume Akenzua (Sir Rume) is an accomplished speaker and development professional with over a decade of experience in hosting events and training employees across finance, education, retail and hospitality industries.
                </p>
                <p>
                  He holds an LLB from the University of Hertfordshire (UK) and a B.L from the Nigerian Law School. His passion for transforming African service culture has led him to train and consult brands such as Uber, Paga, GTBank, FoodCo, NOIR, Nok by Alara and American International School Lagos.
                </p>
                <p>
                  Sir Rume has graced global stages including Lagos Business School, The Platform Nigeria, The Platform Africa and The Experience 2024. He is recognized as one of Nigeria's top emerging MCs and Compères.
                </p>
              </div>
              <div className="mt-10">
                <Button onClick={() => onNavigate('contact')}>Work With Sir Rume</Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-luxury-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4OTE0NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Osarume Akenzua - Sir Rume"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Blocks */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="text-gold mb-6">{block.icon}</div>
                <h3 className="text-2xl font-serif mb-4 text-charcoal">{block.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-serif text-gold mb-2">10+</p>
              <p className="text-white/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-serif text-gold mb-2">500+</p>
              <p className="text-white/70">Events Hosted</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-serif text-gold mb-2">1000+</p>
              <p className="text-white/70">Professionals Trained</p>
            </div>
            <div className="text-center">
              <p className="text-5xl lg:text-6xl font-serif text-gold mb-2">50+</p>
              <p className="text-white/70">Corporate Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Let's work together to build a culture of excellence and service in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => onNavigate('bookings')}>Book a Session</Button>
            <Button variant="outline" onClick={() => onNavigate('contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
