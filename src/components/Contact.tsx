import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, User, Clock, Globe } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
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
      icon: <Mail className="w-5 h-5 text-cyan-400" />
    },
    {
      label: 'Phone Call',
      value: PERSONAL_INFO.phone,
      subtext: 'Mobile & Direct Line',
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: <Phone className="w-5 h-5 text-blue-400" />
    },
    {
      label: 'WhatsApp Chat',
      value: PERSONAL_INFO.whatsapp,
      subtext: 'Instant Messaging',
      href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />
    },
    {
      label: 'Location',
      value: PERSONAL_INFO.location,
      subtext: PERSONAL_INFO.hometown,
      href: '#map',
      icon: <MapPin className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Muhammad Azhar</span>
          </h2>
          <p className={`text-sm sm:text-base ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Open for AWS Cloud Architecture, IT Infrastructure consulting, full-time positions, and technical inquiries.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 group ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800 text-white shadow-xl shadow-cyan-950/10'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {card.label}
              </span>
              <p className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {card.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {card.subtext}
              </p>
            </a>
          ))}
        </div>

        {/* Form and Google Maps Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-800 text-white shadow-2xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-xl'
            }`}>
              
              <h3 className="text-xl font-bold tracking-tight mb-2">Send a Message</h3>
              <p className={`text-xs sm:text-sm mb-6 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Fill out the form below and Muhammad Azhar will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-300">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Muhammad Azhar will review your message and respond via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          theme === 'dark'
                            ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                          theme === 'dark'
                            ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Cloud Architecture Project / Hiring Inquiry"
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        theme === 'dark'
                          ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Muhammad, I would like to discuss a Cloud Solutions Architect role or technical project..."
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none ${
                        theme === 'dark'
                          ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Location & Google Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/90 border-slate-800 text-white shadow-xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 text-slate-900 shadow-lg'
            }`}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Location & Hub</h3>
                  <p className="text-xs text-slate-400">Islamabad & Charsadda, KPK, Pakistan</p>
                </div>
              </div>

              {/* Embedded Google Maps View */}
              <div id="map" className="relative h-64 rounded-2xl overflow-hidden border border-slate-800/80 mb-4">
                <iframe
                  title="Muhammad Azhar Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.10091876525!2d72.82583863483984!3d33.61637225132791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: theme === 'dark' ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Timezone: PKT (UTC+5) • Responsive & Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Languages: English (C2 Proficient), Urdu (Native)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Floating Action Quick Contact Buttons (WhatsApp & Phone) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-3.5 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
            Chat on WhatsApp
          </span>
        </a>

        {/* Direct Call Floating Button */}
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          aria-label="Call Muhammad Azhar"
          className="p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-xl shadow-cyan-500/30 hover:bg-cyan-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <Phone className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
            Call Directly
          </span>
        </a>
      </div>
    </section>
  );
};
