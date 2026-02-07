"use client";

import { Button } from "@/components/Button";
import {
  ClipboardList,
  Users,
  Calendar,
  TrendingUp,
  Gift,
} from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";

export default function TalentRescuePage() {
  const router = useRouter();

  const steps = [
    {
      icon: <ClipboardList size={36} />,
      title: "Register Company",
      description:
        "Sign up your organization and identify employees who need support.",
    },
    {
      icon: <Users size={36} />,
      title: "Submit Employees",
      description:
        "Provide details about the employees participating in the program.",
    },
    {
      icon: <Calendar size={36} />,
      title: "Book Sessions",
      description:
        "Schedule coaching sessions at convenient times for your team.",
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Performance Shift",
      description:
        "Watch as employees transform their mindset and work approach.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Talent Rescue Program</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              A corporate intervention designed to rescue underperforming
              employees and transform workplace culture.
            </p>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-luxury-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODkxMDg0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate training"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">What is Talent Rescue?</h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  A corporate intervention for companies seeking to lay off
                  underperforming staff. The program helps employees reflect on
                  obstacles affecting their performance and shifts their mindset,
                  attitude and approach to work.
                </p>
                <p>
                  Rather than immediately terminating valuable employees, Talent
                  Rescue provides a structured intervention that addresses the
                  root causes of underperformance, helping both the employee and
                  organization achieve better outcomes.
                </p>
                <p>
                  Through targeted coaching sessions, employees gain clarity on
                  their challenges, develop emotional intelligence, and learn
                  practical strategies to improve their performance and
                  contribution to the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-luxury text-center"
              >
                <div className="text-gold mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif mb-3 text-charcoal">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Program Benefits</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-2xl shadow-luxury">
              <h3 className="text-2xl font-serif mb-4 text-charcoal">
                For Organizations
              </h3>
              <ul className="space-y-3">
                {[
                  "Reduce employee turnover costs",
                  "Improve team performance and morale",
                  "Build a culture of continuous improvement",
                  "Demonstrate investment in employee development",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream p-8 rounded-2xl shadow-luxury">
              <h3 className="text-2xl font-serif mb-4 text-charcoal">
                For Employees
              </h3>
              <ul className="space-y-3">
                {[
                  "Gain clarity on performance barriers",
                  "Develop emotional intelligence skills",
                  "Learn practical performance strategies",
                  "Rebuild confidence and motivation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16 text-white">Investment</h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Regular Pricing */}
            <div className="bg-white/5 p-10 rounded-2xl shadow-luxury-lg">
              <h3 className="text-2xl font-serif mb-4 text-white">
                Regular Pricing
              </h3>
              <div className="mb-6">
                <div className="mb-4">
                  <p className="text-4xl font-serif text-gold mb-2">
                    &#8358;100,000
                  </p>
                  <p className="text-white/70">Individual Employee</p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-gold mb-2">
                    &#8358;400,000
                  </p>
                  <p className="text-white/70">Group of 5 Employees</p>
                </div>
              </div>
            </div>

            {/* Christmas Special */}
            <div className="bg-gold/10 border-2 border-gold p-10 rounded-2xl shadow-luxury-lg relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-gold text-charcoal px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Gift size={16} />
                  Limited Offer
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white">
                Christmas Special
              </h3>
              <div className="mb-6">
                <div className="mb-4">
                  <p className="text-4xl font-serif text-gold mb-2">
                    &#8358;50,000
                  </p>
                  <p className="text-white/70">Individual Employee</p>
                  <p className="text-sm text-white/50 line-through mt-1">
                    &#8358;100,000
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-serif text-gold mb-2">
                    &#8358;300,000
                  </p>
                  <p className="text-white/70">Group of 10 Employees</p>
                  <p className="text-sm text-white/50 line-through mt-1">
                    &#8358;800,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 rounded-full text-lg font-medium shadow-luxury-lg">
              <Gift size={24} />
              <span>First 20 Employees FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">Register Employees</h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Transform underperformance into excellence. Give your employees the
            support they need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              onClick={() => router.push("/bookings")}
            >
              Register Now
            </Button>
            <Button variant="outline" onClick={() => router.push("/contact")}>
              Request More Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
