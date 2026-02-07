"use client";

import { Button } from "@/components/Button";
import {
  Calendar,
  Clock,
  CreditCard,
  Shield,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingsPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const availableTimes = ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "Refunds are available within 24-48 hours after completion of service. Please contact us immediately if you have any concerns about your booking.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-4 weeks in advance for events and coaching sessions to ensure availability, especially during peak seasons.",
    },
    {
      question: "Can I reschedule my booking?",
      answer:
        "Yes, you can reschedule your booking up to 48 hours before the scheduled time without any penalty. Please contact us to arrange a new date.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods through Paystack, including debit cards, credit cards, bank transfers, and USSD.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer special rates for group coaching sessions and corporate bookings. Contact us for a customized quote.",
    },
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time for your booking.");
      return;
    }
    alert(
      `Booking confirmed for ${selectedDate} at ${selectedTime}. Proceeding to payment...`
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Book a Session</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              Schedule your coaching session, event hosting, or consultation
              with Sir Rume.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Placeholder */}
            <div>
              <div className="bg-cream p-8 rounded-2xl shadow-luxury mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-gold" size={28} />
                  <h3 className="text-2xl font-serif text-charcoal">
                    Select Date
                  </h3>
                </div>

                {/* Calendar Grid */}
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <p className="text-xl font-serif text-charcoal">
                      January 2026
                    </p>
                  </div>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs text-charcoal/50 py-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                      const dayOfWeek = new Date(2026, 0, day).getDay();
                      const isAvailable =
                        dayOfWeek === 4 || dayOfWeek === 6;
                      const isSelected = selectedDate === `January ${day}`;

                      return (
                        <button
                          key={day}
                          onClick={() =>
                            isAvailable &&
                            setSelectedDate(`January ${day}`)
                          }
                          disabled={!isAvailable}
                          className={`aspect-square rounded-lg text-sm transition-all ${
                            isSelected
                              ? "bg-gold text-charcoal"
                              : isAvailable
                              ? "bg-cream hover:bg-gold/20 text-charcoal"
                              : "bg-gray-100 text-charcoal/20 cursor-not-allowed"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-sm text-charcoal/60">
                    <p>
                      Available days:{" "}
                      <span className="text-gold font-medium">
                        Thursday & Saturday
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div className="bg-cream p-8 rounded-2xl shadow-luxury">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-gold" size={28} />
                  <h3 className="text-2xl font-serif text-charcoal">
                    Select Time
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-4 rounded-xl transition-all ${
                        selectedTime === time
                          ? "bg-gold text-charcoal shadow-luxury"
                          : "bg-white hover:bg-gold/20 text-charcoal"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div>
              <div className="bg-charcoal text-white p-8 rounded-2xl shadow-luxury-lg sticky top-24">
                <h3 className="text-2xl font-serif mb-6 text-white">
                  Booking Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70">Selected Date:</span>
                    <span className="text-white font-medium">
                      {selectedDate || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70">Selected Time:</span>
                    <span className="text-white font-medium">
                      {selectedTime || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70">Session Type:</span>
                    <span className="text-white font-medium">
                      One-on-One Coaching
                    </span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white font-medium">60 minutes</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif pt-4">
                    <span className="text-gold">Total:</span>
                    <span className="text-gold">&#8358;50,000</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  onClick={handleBooking}
                  className="w-full mb-4"
                >
                  <CreditCard size={20} className="inline mr-2" />
                  Proceed to Payment
                </Button>

                <div className="flex items-center gap-2 text-sm text-white/60 justify-center">
                  <Shield size={16} />
                  <span>Secure payment via Paystack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-luxury">
            <h3 className="text-2xl font-serif mb-4 text-charcoal">
              Refund Policy
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              We are committed to your satisfaction. If you are not completely
              satisfied with the service, refunds are available within 24-48
              hours after completion of service. Please contact us immediately
              with any concerns, and we will work to resolve the issue promptly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl shadow-luxury overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-cream/80 transition-colors"
                >
                  <h4 className="text-xl font-serif text-charcoal pr-4">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    size={24}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-charcoal/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">
            Need Help with Your Booking?
          </h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Our team is here to assist you. Get in touch for personalized
            support.
          </p>
          <Button
            variant="secondary"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
