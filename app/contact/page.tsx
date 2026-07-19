"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { Mail, MapPin, Clock, MessageSquare, Send, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const getLocalTime = () => {
    if (!mounted) return "--:-- --";
    // Return Swasthik's local time indicator (e.g. IST)
    return new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-12 py-8">
      
      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest">GET IN TOUCH</h1>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Let's design and build.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Have an architectural challenge, a product concept, or looking to collaborate? Drop me a message or find me on my digital networks.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[#0c0d11]/60 border border-zinc-900 rounded-xl p-6 space-y-6">
            <h3 className="font-semibold text-white text-sm uppercase font-mono tracking-wider text-zinc-500">Contact Details</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@swasthik.dev"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="p-2 bg-zinc-900 border border-zinc-800 rounded group-hover:border-[#FF2E63] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#FF2E63]" />
                </span>
                <div className="text-sm">
                  <p className="text-xs text-zinc-500 font-mono">EMAIL</p>
                  <p className="font-medium">hello@swasthik.dev</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                  <MapPin className="w-4 h-4 text-[#FF2E63]" />
                </span>
                <div className="text-sm">
                  <p className="text-xs text-zinc-500 font-mono">LOCATION</p>
                  <p className="font-medium">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                  <Clock className="w-4 h-4 text-[#FF2E63]" />
                </span>
                <div className="text-sm">
                  <p className="text-xs text-zinc-500 font-mono">LOCAL TIME</p>
                  <p className="font-medium">{getLocalTime()} (GMT+5:30)</p>
                </div>
              </div>
            </div>

          </div>

          <div className="p-6 bg-zinc-900/10 border border-dashed border-zinc-900 rounded-xl">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">Response Standard</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              I reply to qualified engineering enquiries within 12 hours. General networking responses may take slightly longer.
            </p>
          </div>

        </div>

        {/* Message Form (8 cols) */}
        <div className="lg:col-span-8 bg-[#0c0d11]/60 border border-zinc-900 rounded-xl p-6 sm:p-8">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-zinc-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900/50 border border-zinc-850 rounded-lg text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-zinc-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900/50 border border-zinc-850 rounded-lg text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-zinc-400">Message / Brief</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Briefly describe your project or engagement opportunities..."
                className="w-full px-4 py-2.5 text-sm bg-zinc-900/50 border border-zinc-850 rounded-lg text-white placeholder-zinc-650 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all duration-300 resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto gap-2"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-white" /> Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </Button>
              
              {isSubmitted && (
                <p className="text-xs text-emerald-400 font-mono animate-fade-in">
                  Thank you! I will get back to you shortly.
                </p>
              )}
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
