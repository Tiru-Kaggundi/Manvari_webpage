/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ServiceCardItem } from './components/Diagrams';
import { 
  Menu, X, ArrowRight, Mail, Phone, MapPin, 
  Cpu, Landmark, Factory, Stethoscope, ShoppingBag, Briefcase,
  CheckCircle2, Globe2, Shield, HeartHandshake, Eye, Sparkles, Send
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactFormData } from './types';

const heroImage = "/src/assets/images/hero_executive_search_1793371616944.jpg";
const founderImage = "/src/assets/images/ceo_executive_leader_1793371617854.jpg";

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    service: 'Recruitment and placement',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.workEmail.trim() || !formData.company.trim()) {
      setFormError('Please complete your name, work email, and company.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      setFormError('Please enter a valid work email address.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const services = [
    {
      number: '1',
      title: 'Recruitment and placement',
      description: 'Hiring for specialist, technical and mid-to-senior roles. You pay a fee only when you hire.'
    },
    {
      number: '2',
      title: 'Executive search (retained)',
      description: 'An exclusive, confidential search for board members, CEOs and senior leaders, run from brief to offer.'
    },
    {
      number: '3',
      title: 'HR advisory and best practices',
      description: 'Practical support on organisation design, compensation benchmarking, succession planning, and HR policies and processes.'
    }
  ];

  const industries = [
    { title: 'Technology', icon: Cpu, desc: 'Software engineering, product leadership, cloud infrastructure, and data.' },
    { title: 'Financial services', icon: Landmark, desc: 'Banking, asset management, private equity, fintech, and capital markets.' },
    { title: 'Manufacturing and industrials', icon: Factory, desc: 'Advanced engineering, precision manufacturing, operations, and supply chain.' },
    { title: 'Healthcare and life sciences', icon: Stethoscope, desc: 'Pharmaceuticals, biotechnology, medical devices, and digital health.' },
    { title: 'Consumer and retail', icon: ShoppingBag, desc: 'Direct-to-consumer, e-commerce, brand leadership, and omnichannel retail.' },
    { title: 'Corporate functions', icon: Briefcase, desc: 'Leadership across HR, finance, legal, and operational functions.' }
  ];

  const workSteps = [
    {
      number: '1',
      title: 'Understand the role.',
      description: 'We agree what success looks like, the skills needed and the culture the person will join.'
    },
    {
      number: '2',
      title: 'Search and assess.',
      description: 'We reach active and passive candidates and interview them against the brief.'
    },
    {
      number: '3',
      title: 'Shortlist.',
      description: 'You receive a short, well-assessed shortlist, not a pile of CVs.'
    },
    {
      number: '4',
      title: 'Close and follow through.',
      description: 'We support references, offer and negotiation, and stay in touch after the start date.'
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Experience.',
      description: 'More than twenty years in global talent acquisition.'
    },
    {
      title: 'Direct attention.',
      description: 'You work with the founder on every search.'
    },
    {
      title: 'Discretion.',
      description: 'Clients and candidates are handled in confidence.'
    }
  ];

  const values = [
    {
      title: 'Trust.',
      description: 'We keep our word to clients and candidates alike.'
    },
    {
      title: 'Excellence.',
      description: 'We hold every search to a high standard.'
    },
    {
      title: 'Client focus.',
      description: 'Each search starts from what the client actually needs.'
    },
    {
      title: 'Transparency.',
      description: 'Clear terms, honest updates and no surprises.'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white bg-[#F8FAFC] text-slate-900">
      
      {/* Top Bar - Strict 3-Zone Contract */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-200' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group cursor-pointer focus-visible:outline-none"
          >
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg shadow-xs">
              M
            </div>
            <span className="font-serif font-bold text-lg tracking-wide text-slate-900">
              Manvari<span className="text-accent"> Partners</span>
            </span>
          </button>
          
          {/* Zone 2: Clean single-line text links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              What we do
            </button>
            <button onClick={() => scrollTo('industries')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Industries & regions
            </button>
            <button onClick={() => scrollTo('how-we-work')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              How we work
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              About us
            </button>
          </div>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-accent text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              Talk to us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-slate-900 p-2 focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-7 text-xl font-serif">
          <button onClick={() => scrollTo('services')} className="hover:text-accent">What we do</button>
          <button onClick={() => scrollTo('industries')} className="hover:text-accent">Industries & regions</button>
          <button onClick={() => scrollTo('how-we-work')} className="hover:text-accent">How we work</button>
          <button onClick={() => scrollTo('about')} className="hover:text-accent">About us</button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="px-6 py-3 bg-accent text-white rounded-md font-sans text-sm font-semibold uppercase tracking-wider"
          >
            Talk to us
          </button>
        </div>
      )}

      {/* 1. Home (Hero Section) */}
      <header className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Main Copy & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">
                  Executive Search · Recruitment · HR Advisory
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.14] mb-5" style={{ textWrap: 'balance' }}>
                  The right people for the roles that matter.
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Manvari Partners is an executive search and recruitment firm. We find best-in-class talent for each client's needs, across industries and regions, drawing on more than twenty years of global talent acquisition experience.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="pt-2"
              >
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="px-8 py-3.5 bg-accent text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-all hover:shadow-md flex items-center gap-2 group"
                >
                  <span>Talk to us</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </motion.div>
            </div>
            
            {/* Right: Dignified Corporate Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <img 
                  src={heroImage} 
                  alt="Global executive search advisory" 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      <main>
        {/* 2. Services: What we do */}
        <section id="services" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-3">
                What we do
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We find best-in-class talent matched to each client's needs.
              </p>
            </div>

            {/* 3 Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <ServiceCardItem
                  key={service.number}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>

            {/* Line under the list */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-700 text-sm font-medium">
                Not sure which fits? Tell us about the role and we will recommend an approach.
              </p>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-xs"
              >
                Talk to us
              </button>
            </div>
          </div>
        </section>

        {/* 3. Across industries and regions */}
        <section id="industries" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-3">
                Across industries and regions
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We recruit across sectors and functions, for organisations hiring locally or across borders.
              </p>
            </div>

            {/* Industries simple list / card row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {industries.map((ind, idx) => {
                const IconComponent = ind.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-accent shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Regions */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-accent mb-2">
                <Globe2 size={16} />
                <span>Geographic Scope</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                Regions
              </h3>
              <p className="text-slate-700 text-base font-medium mb-2">
                India, Asia-Pacific, the Middle East, Europe and North America.
              </p>
              <p className="text-xs text-slate-500">
                Supporting domestic enterprise buildouts as well as cross-border international talent mobility.
              </p>
            </div>
          </div>
        </section>

        {/* 4. How we work */}
        <section id="how-we-work" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-3">
                How we work
              </h2>
            </div>

            {/* 4 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {workSteps.map((step) => (
                <div key={step.number} className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-serif font-bold text-accent font-mono mb-3">
                      0{step.number}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why work with us */}
            <div className="mb-16 pt-12 border-t border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8">
                Why work with us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyWorkWithUs.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                    <div className="text-base font-bold text-slate-900 mb-2 font-serif">
                      • {item.title}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our values */}
            <div className="pt-12 border-t border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8">
                Our values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="text-sm font-bold text-slate-900 mb-1.5 font-serif">
                      • {val.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. About us */}
        <section id="about" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-3">
                About us
              </h2>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm max-w-5xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                
                {/* Founder Portrait */}
                <div className="w-44 h-44 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                  <img 
                    src={founderImage} 
                    alt="S Agarwal, Founder & Managing Partner" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Founder Narrative */}
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                      S Agarwal
                    </h3>
                    <div className="text-accent font-semibold tracking-wider text-xs uppercase mt-1">
                      Founder & Managing Partner
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    S Agarwal has spent more than twenty years in talent acquisition, hiring for organisations across India, Asia-Pacific, the Middle East, Europe and North America across diverse industries including technology, financial services, industrials, healthcare, and consumer businesses. Her experience covers executive and leadership hiring, cross-border recruitment, and HR advisory for growing businesses. She founded Manvari Partners to offer clients focused, personal search support.
                  </p>

                  <div className="pt-2 text-slate-800 font-serif italic text-base">
                    "Finding the right people for the roles that matter most."
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 6. Talk to us (Contact) */}
        <section id="contact" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-3">
                Talk to us
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Hiring for a role, or thinking about your team structure? Get in touch for an initial conversation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl">
              
              {/* Form */}
              <div className="lg:col-span-7 bg-[#F8FAFC] p-8 rounded-xl border border-slate-200">
                {formSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Thank you for getting in touch.
                    </h3>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
                      We have received your enquiry and will respond promptly for an initial conversation.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          workEmail: '',
                          company: '',
                          phone: '',
                          service: 'Recruitment and placement',
                          message: ''
                        });
                      }}
                      className="mt-3 px-5 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-slate-50 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Work email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company name"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91..."
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Service of interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value as ContactFormData['service'] })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                      >
                        <option value="Recruitment and placement">Recruitment and placement</option>
                        <option value="Executive search">Executive search</option>
                        <option value="HR advisory">HR advisory</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the role or team structure..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Send size={14} />
                      <span>Send</span>
                    </button>

                    <p className="text-xs text-slate-500 text-center pt-1">
                      All enquiries are handled in confidence.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
                    Direct Contact
                  </h3>
                  
                  <div className="space-y-5 text-sm">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</div>
                        <a 
                          href="mailto:contact@manvari.com" 
                          className="font-medium text-slate-900 hover:text-accent transition-colors"
                        >
                          contact@manvari.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</div>
                        <a 
                          href="tel:+919980206008" 
                          className="font-medium text-slate-900 hover:text-accent transition-colors"
                        >
                          +91-9980206008
                        </a>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Mon to Fri, 9:00 AM to 6:00 PM IST
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                        <div className="font-medium text-slate-900">
                          Bengaluru, India
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-900">Client discretion: </span>
                  We operate with strict confidentiality for all client mandates and candidate conversations.
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-accent rounded-xs flex items-center justify-center text-white font-serif font-bold text-sm">
                  M
                </div>
                <span className="font-serif font-bold text-lg text-white">
                  Manvari<span className="text-accent"> Partners</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Finding the right people for the roles that matter most.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-300">
              <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">What we do</button>
              <button onClick={() => scrollTo('industries')} className="hover:text-white transition-colors">Industries & regions</button>
              <button onClick={() => scrollTo('how-we-work')} className="hover:text-white transition-colors">How we work</button>
              <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About us</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Talk to us</button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Manvari Partners. All rights reserved.
            </div>
            <div>
              Bengaluru, India · contact@manvari.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;