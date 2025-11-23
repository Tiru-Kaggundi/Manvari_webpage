/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ServiceCard } from './components/Diagrams';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronRight, CheckCircle2, Users, Globe, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">M</div>
            <span className="font-serif font-bold text-lg tracking-wide text-primary-DEFAULT">
              Manvari<span className="text-accent"> Partners</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollTo('team')} className="hover:text-accent transition-colors">Team</button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors shadow-sm"
            >
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-slate-900 z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <button onClick={() => scrollTo('services')} className="hover:text-accent">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent">About</button>
            <button onClick={() => scrollTo('team')} className="hover:text-accent">Team</button>
            <button onClick={() => scrollTo('contact')} className="text-accent font-bold">Contact Us</button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-red-50 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-red-100">
                Strategic Consulting & Advisory
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
                Empowering <span className="text-accent italic">Talent</span>.<br/>
                Shaping <span className="text-accent italic">Policy</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                We bridge the gap between human potential and global strategy. From executive search to AI governance, we prepare organizations for the future.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-all hover:shadow-lg flex items-center gap-2 group">
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button onClick={() => scrollTo('about')} className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-md font-medium hover:bg-slate-50 transition-colors">
                Why Manvari?
              </button>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="hidden md:block relative"
          >
             <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Manvari Team Discussion" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                   <p className="text-white/90 font-serif italic">"Leadership is the capacity to translate vision into reality."</p>
                </div>
             </div>
             {/* Floating Elements */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-accent"></div>
                   <span className="text-xs font-bold uppercase text-slate-400">Core Focus</span>
                </div>
                <div className="text-lg font-bold text-slate-900">People & Advisory Services</div>
                <div className="text-sm text-slate-500 mt-1">Finding right talent for your roles, solving your problems.</div>
             </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl text-slate-900 mb-4">Our Expertise</h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-slate-600">
                Comprehensive solutions tailored to human capital and global strategic challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="HR Consultancy"
                description="Optimizing organizational structures, improving employee engagement, and developing robust HR frameworks to foster a culture of excellence and performance."
                icon={<Users className="w-8 h-8" />}
                delay={0.1}
              />
              <ServiceCard 
                title="Recruitment & Search"
                description="Identifying and securing top-tier leadership through Executive Search and specialized recruitment services to drive your organization forward."
                icon={<Target className="w-8 h-8" />}
                delay={0.2}
              />
              <ServiceCard 
                title="Trade & AI Advisory"
                description="Guiding management in international trade expansion and providing expert counsel on AI public policy, governance, and ethical implementation."
                icon={<Globe className="w-8 h-8" />}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* About / Why Us */}
        <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
           <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="font-serif text-4xl text-slate-900 mb-6">Why Manvari?</h2>
                 <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    At Manvari Partners, we believe that successful organizations are built on two pillars: exceptional people and forward-thinking strategy. We bring a human-centric approach to complex global challenges.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {[
                      "Deep expertise in Talent Acquisition",
                      "Global perspective on Trade & Policy",
                      "Ethical AI Governance strategies",
                      "Tailored, boutique service approach"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
                 <button onClick={() => scrollTo('team')} className="text-accent font-medium hover:text-accent-dark transition-colors flex items-center gap-2">
                    Meet our leadership <ChevronRight size={16} />
                 </button>
              </div>
              <div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                       <div className="bg-white p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center border-l-4 border-accent hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2 px-6">People</h3>
                          <p className="text-sm text-slate-500 px-6">Connecting you with the leaders of tomorrow.</p>
                       </div>
                       <div className="bg-slate-800 p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center text-white hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2">Policy</h3>
                          <p className="text-sm text-slate-400">Navigating the regulatory landscape of AI.</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="bg-white p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center border-l-4 border-primary-DEFAULT hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2 px-6">Strategy</h3>
                          <p className="text-sm text-slate-500 px-6">Expanding your footprint in global trade.</p>
                       </div>
                       <div className="bg-accent p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center text-white hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2">Growth</h3>
                          <p className="text-sm text-white/80">Sustainable development for your firm.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Team Section (Replaces Results/Testimonials) */}
        <section id="team" className="py-24 bg-white">
           <div className="container mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                 <h2 className="font-serif text-4xl text-slate-900 mb-4">Our Leadership</h2>
                 <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                 <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-48 h-48 shrink-0 relative">
                       <div className="absolute inset-0 bg-accent/10 rounded-full translate-x-2 translate-y-2"></div>
                       <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                          alt="S Agarwal" 
                          className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-md" 
                       />
                    </div>
                    <div className="text-center md:text-left">
                       <h3 className="text-3xl font-serif text-slate-900 mb-2">S Agarwal</h3>
                       <div className="text-accent font-bold uppercase tracking-wider text-sm mb-6">CEO, Manvari Partners</div>
                       <p className="text-slate-600 leading-relaxed mb-6 italic">
                          "With a passion for connecting human potential with strategic innovation, I founded Manvari Partners to help organizations navigate the complexities of modern business. Whether it's finding the right leader or shaping AI policy, we are dedicated to your sustainable growth."
                       </p>
                       <div className="flex justify-center md:justify-start gap-3">
                          <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">HR Strategy</span>
                          <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Executive Search</span>
                          <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Public Policy</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact Section - Modified to Light Background with Maroon Text */}
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
           <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                 <h2 className="font-serif text-4xl mb-6 text-slate-900">Connect With Us</h2>
                 <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
                 <p className="text-slate-600 text-lg">
                    Ready to transform your organization? Reach out to us directly.
                 </p>
              </div>
              
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Email Card */}
                 <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform border border-red-100">
                        <Mail size={32} />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-slate-900">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-4">For general inquiries and appointments</p>
                    <a href="mailto:sugandha.agarwal@gmail.com" className="font-bold text-lg text-accent hover:text-accent-dark transition-colors break-all">
                      sugandha.agarwal@gmail.com
                    </a>
                 </div>

                 {/* Phone Card */}
                 <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform border border-red-100">
                        <Phone size={32} />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-slate-900">Call Us</h3>
                    <p className="text-slate-500 text-sm mb-4">Mon-Fri from 9am to 6pm IST</p>
                    <a href="tel:+919980206008" className="font-bold text-lg text-accent hover:text-accent-dark transition-colors">
                      +91-9980206008
                    </a>
                 </div>

                 {/* Address Card */}
                 <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform border border-red-100">
                        <MapPin size={32} />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-slate-900">Visit Us</h3>
                    <p className="text-slate-500 text-sm mb-4">Our Headquarters</p>
                    <address className="font-bold text-lg not-italic text-accent">
                      Manvari Partners<br />
                      <span className="text-base font-medium text-slate-600">
                        737, 3rd B main, ISRO layout<br />
                        Bengaluru, Karnataka, India, 560078
                      </span>
                    </address>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-accent text-white py-12 border-t border-accent-dark">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-90">
               &copy; {new Date().getFullYear()} Manvari Partners. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-medium">
               <a href="#" className="hover:text-red-200 transition-colors opacity-90">Privacy Policy</a>
               <a href="#" className="hover:text-red-200 transition-colors opacity-90">Terms of Service</a>
               <a href="#" className="hover:text-red-200 transition-colors opacity-90">LinkedIn</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;