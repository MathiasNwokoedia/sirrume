"use client";

import { Button } from "@/components/Button";
import {
  User,
  Users,
  Building,
  BookOpen,
  Monitor,
  Target,
  Heart,
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";

export default function CoachingPage() {
  const router = useRouter();

  const services = [
    {
      icon: <User size={36} />,
      title: "One-on-One Coaching",
      description:
        "Personalized coaching sessions tailored to your specific career and personal development goals.",
    },
    {
      icon: <Users size={36} />,
      title: "Group Coaching",
      description:
        "Collaborative learning experiences with peers facing similar professional challenges.",
    },
    {
      icon: <Building size={36} />,
      title: "Corporate Training",
      description:
        "Customized training programs designed to transform your organization's culture and performance.",
    },
    {
      icon: <BookOpen size={36} />,
      title: "Workshops",
      description:
        "Interactive workshops on emotional intelligence, leadership, and service excellence.",
    },
    {
      icon: <Monitor size={36} />,
      title: "Webinars",
      description:
        "Virtual sessions accessible from anywhere, covering critical professional development topics.",
    },
  ];

  const focusAreas = [
    {
      icon: <Target size={36} />,
      title: "Career Development",
      points: [
        "Professional growth strategies",
        "Leadership development",
        "Performance optimization",
        "Work-life integration",
      ],
    },
    {
      icon: <Heart size={36} />,
      title: "Emotions & Relationships",
      points: [
        "Emotional intelligence",
        "Workplace relationships",
        "Conflict resolution",
        "Communication mastery",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Coaching & Training</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              Transform your mindset, elevate your performance, and unlock your
              full potential through personalized coaching and training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Coaching Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<div className="text-gold">{service.icon}</div>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-20 lg:py-32 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-luxury-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761933799610-c9a75f115794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGluZyUyMG1lbnRvciUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY4OTIxNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Coaching session"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Focus Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-cream p-10 rounded-2xl shadow-luxury">
                <div className="text-gold mb-6">{area.icon}</div>
                <h3 className="text-3xl font-serif mb-6 text-charcoal">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">The Coaching Process</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                num: 1,
                title: "Assessment",
                desc: "Understand your current state and goals",
              },
              {
                num: 2,
                title: "Strategy",
                desc: "Develop personalized action plan",
              },
              {
                num: 3,
                title: "Implementation",
                desc: "Execute and practice new approaches",
              },
              {
                num: 4,
                title: "Transformation",
                desc: "Achieve lasting change and growth",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-charcoal text-2xl font-serif mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="text-xl font-serif mb-2 text-charcoal">
                  {step.title}
                </h4>
                <p className="text-sm text-charcoal/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-serif mb-8 text-white/90 italic">
              &ldquo;Sir Rume&apos;s coaching transformed not just my career
              approach but my entire perspective on service and excellence. His
              insights are both practical and profound.&rdquo;
            </p>
            <div className="text-gold">
              <p className="font-medium">Senior Manager</p>
              <p className="text-sm text-white/60">Financial Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">Book a Coaching Session</h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Start your transformation journey today with personalized coaching
            designed to unlock your potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              onClick={() => router.push("/bookings")}
            >
              Book Now
            </Button>
            <Button variant="outline" onClick={() => router.push("/contact")}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
