/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ServiceCard, StatsDisplay } from './components/Diagrams';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch shortly.");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent-DEFAULT selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-primary-DEFAULT rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
            <span className="font-serif font-bold text-lg tracking-wide text-primary-DEFAULT">
              Lumina<span className="text-accent-DEFAULT">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('services')} className="hover:text-accent-DEFAULT transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent-DEFAULT transition-colors">About</button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-accent-DEFAULT transition-colors">Results</button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-primary-DEFAULT text-white rounded-md hover:bg-primary-light transition-colors shadow-sm"
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
            <button onClick={() => scrollTo('services')} className="hover:text-accent-DEFAULT">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-accent-DEFAULT">About</button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-accent-DEFAULT">Results</button>
            <button onClick={() => scrollTo('contact')} className="text-accent-DEFAULT font-bold">Contact Us</button>
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
              <div className="inline-block px-3 py-1 bg-blue-50 text-accent-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Strategic Consulting
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
                Clarity in <br/>
                <span className="text-accent-DEFAULT italic">Complexity</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                We help forward-thinking organizations navigate uncertainty and achieve sustainable growth through data-driven strategy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-primary-DEFAULT text-white rounded-md font-medium hover:bg-primary-light transition-all hover:shadow-lg flex items-center gap-2 group">
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button onClick={() => scrollTo('about')} className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-md font-medium hover:bg-slate-50 transition-colors">
                Our Approach
              </button>
            </motion.div>
          </div>
          
          {/* Hero Image / Graphic Placeholder */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="hidden md:block relative"
          >
             <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Office Architecture" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                   <p className="text-white/90 font-serif italic">"Strategy is about making choices, trade-offs; it's about deliberately choosing to be different."</p>
                </div>
             </div>
             {/* Floating Elements */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="text-xs font-bold uppercase text-slate-400">Growth Metric</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">+127%</div>
                <div className="text-sm text-slate-500">Year-over-year client efficiency gain.</div>
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
              <div className="w-16 h-1 bg-accent-DEFAULT mx-auto mb-6"></div>
              <p className="text-slate-600">
                Comprehensive solutions tailored to your unique business challenges. We don't just advise; we partner with you to execute.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Corporate Strategy"
                description="Define your vision and chart a clear path to market leadership with our data-backed strategic planning frameworks."
                icon={<BarChart2Icon />}
                delay={0.1}
              />
              <ServiceCard 
                title="Operational Excellence"
                description="Streamline workflows, reduce waste, and optimize resource allocation to maximize your bottom line."
                icon={<SettingsIcon />}
                delay={0.2}
              />
              <ServiceCard 
                title="Digital Transformation"
                description="Leverage cutting-edge technology to modernize your infrastructure and create seamless customer experiences."
                icon={<CpuIcon />}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* About / Why Us */}
        <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
           <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="font-serif text-4xl text-slate-900 mb-6">Why Lumina?</h2>
                 <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We believe that true consultancy is about more than just powerpoints. It's about deep understanding, rigorous analysis, and pragmatic implementation.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {[
                      "Evidence-based decision making",
                      "Agile implementation methodologies",
                      "Cross-industry expertise",
                      "Sustainable, long-term results"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 size={20} className="text-accent-DEFAULT" />
                        <span>{item}</span>
                      </li>
                    ))}
                 </ul>
                 <button onClick={() => scrollTo('contact')} className="text-accent-dark font-medium hover:text-primary-DEFAULT transition-colors flex items-center gap-2">
                    Meet our team <ChevronRight size={16} />
                 </button>
              </div>
              <div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                       <div className="bg-white p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center border-l-4 border-accent-DEFAULT hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2 px-6">Analysis</h3>
                          <p className="text-sm text-slate-500 px-6">Deep dive diagnostics to uncover root causes.</p>
                       </div>
                       <div className="bg-slate-800 p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center text-white hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2">Strategy</h3>
                          <p className="text-sm text-slate-400">Custom roadmaps designed for your market.</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="bg-white p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center border-l-4 border-primary-DEFAULT hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2 px-6">Execution</h3>
                          <p className="text-sm text-slate-500 px-6">Hands-on support during implementation.</p>
                       </div>
                       <div className="bg-accent-DEFAULT p-6 rounded-xl shadow-sm h-48 flex flex-col justify-center text-white hover:-translate-y-1 transition-transform">
                          <h3 className="font-serif text-xl mb-2">Results</h3>
                          <p className="text-sm text-white/80">Measurable impact on your KPIs.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Stats / Social Proof */}
        <section id="testimonials" className="py-24 bg-white">
           <div className="container mx-auto px-6">
              <StatsDisplay />
              
              <div className="mt-20 max-w-4xl mx-auto text-center">
                 <h3 className="text-2xl font-serif italic text-slate-800 mb-8 leading-relaxed">
                    "Lumina transformed our operational model, leading to a 40% increase in efficiency within the first quarter. An indispensable partner."
                 </h3>
                 <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="CEO" />
                    </div>
                    <div className="text-left">
                       <div className="font-bold text-slate-900">David Chen</div>
                       <div className="text-xs text-slate-500 uppercase tracking-wider">CEO, TechFlow Inc.</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary-DEFAULT text-white">
           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                 <h2 className="font-serif text-4xl mb-6">Let's Build the Future</h2>
                 <p className="text-slate-400 mb-8 text-lg">
                    Ready to take your business to the next level? Contact us for a free initial consultation.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-DEFAULT transition-colors">
                          <Mail className="text-accent-DEFAULT group-hover:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400">Email Us</div>
                          <div className="font-medium">contact@luminastrategy.com</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-DEFAULT transition-colors">
                          <Phone className="text-accent-DEFAULT group-hover:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400">Call Us</div>
                          <div className="font-medium">+1 (555) 123-4567</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-DEFAULT transition-colors">
                          <MapPin className="text-accent-DEFAULT group-hover:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-sm text-slate-400">Visit Us</div>
                          <div className="font-medium">100 Innovation Blvd, Tech City</div>
                       </div>
                    </div>
                 </div>
              </div>

              <form className="bg-white rounded-xl p-8 text-slate-900 shadow-lg" onSubmit={handleFormSubmit}>
                 <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                 <div className="space-y-4">
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                       <input required type="text" className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                       <input required type="email" className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                       <textarea required rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-md focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-accent-DEFAULT text-white font-bold rounded-md hover:bg-accent-dark transition-colors">
                       Send Inquiry
                    </button>
                 </div>
              </form>
           </div>
        </section>
      </main>

      <footer className="bg-primary-light text-slate-400 py-12 border-t border-slate-700">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
               &copy; 2024 Lumina Strategy Consulting. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm font-medium">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

// Icons
const BarChart2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
)
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
)
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
)

export default App;