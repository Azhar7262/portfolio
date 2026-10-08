import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock, Globe, Github, Linkedin, Cloud, PenTool, Terminal, Server, Database, Zap, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './ui';

interface ContactProps {
  theme: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const dark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          ...PERSONAL_INFO,
        }),
      });
      const data = await res.json();
      if (data && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setSubmitted(false);
      }
    } catch {
      setSubmitted(false);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactCards = [
    {
      label: 'Email Address',
      value: PERSONAL_INFO.email,
      subtext: 'Direct Inbox Response',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="h-5 w-5 text-primary-300" />,
      area: 'email',
    },
    {
      label: 'Phone Call',
      value: PERSONAL_INFO.phone,
      subtext: 'Mobile & Direct Line',
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: <Phone className="h-5 w-5 text-primary-300" />,
      area: 'phone',
    },
    {
      label: 'WhatsApp Chat',
      value: PERSONAL_INFO.whatsapp,
      subtext: 'Instant Messaging',
      href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: <MessageSquare className="h-5 w-5 text-accent-300" />,
      area: 'whatsapp',
    },
  ];

  const inputClass = `w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-soft transition-all focus:border-primary-400/40 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
    dark ? 'bg-white/5' : 'bg-white'
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
          subtitle="Open for AWS Cloud Architecture, IT Infrastructure consulting, full-time positions, and technical inquiries."
        />

        {/* Contact info cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, idx) => (
            <a
              key={card.area}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group flex flex-col gap-3 rounded-2xl border p-5 transition-all duration-[320ms] hover:-translate-y-1 hover:shadow-lg ${
                dark
                  ? 'border-white/10 bg-white/[0.03] hover:border-primary-400/20 hover:shadow-primary-500/8'
                  : 'border-slate-200/80 bg-white hover:border-primary-300/30 hover:shadow-primary-500/8'
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-[320ms] group-hover:scale-110">
                {card.icon}
              </div>
              <div>
                <p className={`text-sm font-bold ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>{card.label}</p>
                <p className={`text-xs truncate ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>{card.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form + details */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl border p-5 sm:p-7 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>Send a Message</h3>
                  <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Fill out the form and Muhammad Azhar will get back to you within 24 hours.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="mt-5 flex flex-col gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  <p className={`text-sm font-semibold text-emerald-300`}>Message Sent Successfully!</p>
                  <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                    Thank you for reaching out. Muhammad Azhar will review your message and respond via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Muhammad Azhar"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="azharkhan726200@gmail.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Cloud Architecture Project / Hiring Inquiry"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Muhammad, I would like to discuss a Cloud Solutions Architect role or technical project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-xs font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-5 sm:p-7 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200/80 bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${dark ? 'text-[#f1f5f9]' : 'text-[#0b0d17]'}`}>Location & Hub</h3>
                  <p className={`text-xs ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>Islamabad & Charsadda, KPK, Pakistan</p>
                </div>
              </div>

              <div className={`mt-4 space-y-3 text-sm leading-relaxed ${dark ? 'text-ink-soft' : 'text-ink-faint'}`}>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary-400" />
                  <span>Timezone: PKT (UTC+5) · Responsive & available</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-4 w-4 shrink-0 text-primary-400" />
                  <span>Languages: English (C2 Proficient), Urdu (Native)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="h-4 w-4 shrink-0 text-primary-400" />
                  <span>Open to: Cloud Architecture · IT Consulting · Full-time roles · IoT & AI projects</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:border-primary-400/40 hover:text-primary-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                  azharkhan726200@gmail.com
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:border-primary-400/40 hover:text-primary-300"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all hover:border-primary-400/40 hover:text-primary-300"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
