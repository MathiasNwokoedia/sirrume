"use client";

import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              Stay Connected
            </h3>
            <p className="text-white/70 mb-6 max-w-xl">
              Subscribe to receive updates on coaching programs, events, and
              insights on transforming work culture.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-charcoal rounded-lg hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-left text-white/70 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-left text-white/70 hover:text-gold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/sir_rume"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@sirrume.com"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Sir Rume. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
