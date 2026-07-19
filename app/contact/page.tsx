"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { Mail, MapPin, Clock, Send, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const getLocalTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's build together."
          subtitle="Have a space visualization challenge, an open source proposal, or seeking academic collaboration? Send a message."
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard className="p-6 space-y-6" glow>
            <h3 className="font-semibold text-xs font-mono uppercase tracking-wider text-text-tertiary">
              Contact Details
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:swasthik.mk3@gmail.com"
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
              >
                <span className="p-2 bg-bg-tertiary border border-glass rounded group-hover:border-text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4 text-text-primary" />
                </span>
                <div className="text-sm">
                  <p className="text-[10px] text-text-tertiary font-mono uppercase">Email</p>
                  <p className="font-medium text-xs sm:text-sm">swasthik.mk3@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-text-secondary">
                <span className="p-2 bg-bg-tertiary border border-glass rounded">
                  <MapPin className="w-4 h-4 text-text-primary" />
                </span>
                <div className="text-sm">
                  <p className="text-[10px] text-text-tertiary font-mono uppercase">Location</p>
                  <p className="font-medium text-xs sm:text-sm">Mangalore, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-text-secondary">
                <span className="p-2 bg-bg-tertiary border border-glass rounded">
                  <Clock className="w-4 h-4 text-text-primary" />
                </span>
                <div className="text-sm">
                  <p className="text-[10px] text-text-tertiary font-mono uppercase">Local Time</p>
                  <p className="font-medium text-xs sm:text-sm">{getLocalTime()} (IST)</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="p-6 bg-bg-tertiary/10 border border-dashed border-glass rounded-xl">
            <h4 className="text-[10px] font-semibold text-text-primary uppercase tracking-wider mb-2 font-mono">
              Inquiry standard
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              I reply to academic references and space tech requests within 24 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <GlassCard className="p-6 sm:p-8" glow>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 text-xs glass-input rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 text-xs glass-input rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                  Message Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline your project or proposal..."
                  className="w-full px-4 py-2.5 text-xs glass-input rounded-lg resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gap-2 text-xs"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
                
                {isSubmitted && (
                  <p className="text-xs text-emerald-500 font-mono animate-fade-in">
                    Thank you! I will reply as soon as possible.
                  </p>
                )}
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
