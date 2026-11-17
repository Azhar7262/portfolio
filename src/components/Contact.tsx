import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Globe,
  Github, Linkedin, Cloud, Copy, Check, ExternalLink, Loader2
} from 'lucide-react';
import { SectionHeading } from './ui';

interface ContactProps {
  theme: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const dark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });
      const data = await res.json();
      if (data && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 7000);
      } else {
        setErrorMessage(data?.error || 'Failed to send message. Please try again or reach out directly.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please reach out directly via Email or WhatsApp.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const contactCards = [
    {
      label: 'Email Address',
      value: PERSONAL_INFO.email,
      subtext: 'Direct Inbox Response',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      area: 'email',
    },
    {
      label: 'Phone Call',
      value: PERSONAL_INFO.phone,
      subtext: 'Mobile & Direct Line',
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: Phone,
      area: 'phone',
    },
    {
      label: 'WhatsApp Chat',
      value: PERSONAL_INFO.whatsapp,
      subtext: 'Instant Messaging',
      href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: MessageSquare,
      area: 'whatsapp',
    },
    {
      label: 'LinkedIn Profile',
      value: 'muhammad-azhar-khan',
      subtext: 'Professional Network',
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      area: 'linkedin',
    },
  ];

  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
    dark
      ? 'border-white/10 bg-white/5 text-[#f1f5f9] placeholder:text-slate-400 focus:border-primary-400/50'
      : 'border-slate-300 bg-white text-[#0b0d17] placeholder:text-slate-400 focus:border-primary-500'
  }`;

  return (
    <section id="contact" className="relative overflow-hidden pb-[calc(74px+2rem)] pt-20 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme={theme}
          badge="Get In Touch"
          title="Contact"
          highlight="Let's Connect"
          subtitle="Open for Software Engineering, Cloud Architecture, IT Infrastructure consulting, and full-time technical positions."
        />

        {/* Contact info cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.area}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  dark
                    ? 'border-white/10 bg-[#0d0f1c] hover:border-primary-500/30 hover:shadow-primary-500/10'
                    : 'border-slate-200/80 bg-white hover:border-primary-400/50 hover:shadow-slate-200'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${
                      dark
                        ? 'border-primary-500/20 bg-primary-500/10 text-primary-300'
                        : 'border-primary-300/40 bg-primary-50 text-primary-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{card.label}</p>
                    <p className={`text-[11px] font-medium ${dark ? 'text-primary-300' : 'text-primary-600'}`}>{card.subtext}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <p className={`text-xs font-mono font-medium truncate ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{card.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form + details */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl border p-6 sm:p-8 transition-colors ${
                dark ? 'border-white/10 bg-[#0d0f1c]' : 'border-slate-200/80 bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                  dark ? 'border-primary-500/20 bg-primary-500/10 text-primary-300' : 'border-primary-300/40 bg-primary-50 text-primary-700'
                }`}>
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>Send a Direct Message</h3>
                  <p className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Inquiries are received directly. Muhammad Azhar responds within 24 hours.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-fade-in">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                  <p className="text-base font-bold text-emerald-300">Message Sent Successfully!</p>
                  <p className={`text-xs max-w-md ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thank you for reaching out. Muhammad Azhar will review your message and reply to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs font-semibold text-red-400 animate-fade-in">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins or Alex Smith"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Your Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer Role / Cloud Architecture Inquiry"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Muhammad, I would like to discuss a Software Engineer role / technical project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 via-purple-600 to-cyan-500 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Direct Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5 space-y-5">
            <div
              className={`rounded-3xl border p-6 sm:p-8 ${
                dark ? 'border-white/10 bg-[#0d0f1c]' : 'border-slate-200/80 bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                  dark ? 'border-primary-500/20 bg-primary-500/10 text-primary-300' : 'border-primary-300/40 bg-primary-50 text-primary-700'
                }`}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>Location & Availability</h3>
                  <p className={`text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className={`mt-5 space-y-3.5 text-xs sm:text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary-400 mt-0.5" />
                  <span><strong>Timezone:</strong> PKT (UTC+5) · Flexible overlap with US, UK, and European hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 shrink-0 text-primary-400 mt-0.5" />
                  <span><strong>Languages:</strong> English (C2 Proficient / Professional), Urdu (Native)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="h-4 w-4 shrink-0 text-primary-400 mt-0.5" />
                  <span><strong>Open To:</strong> Full-time Software Engineer, Developer, and Cloud Solutions roles (Remote & On-site worldwide)</span>
                </div>
              </div>

              {/* Direct Quick-Action Links */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                    copiedEmail
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                      : dark
                        ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-400'
                  }`}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-400'
                  }`}
                >
                  <Linkedin className="h-3.5 w-3.5 text-primary-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:scale-105 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-slate-300 hover:border-primary-400/40 hover:text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-primary-400'
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
