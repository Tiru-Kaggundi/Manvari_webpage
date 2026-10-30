/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ServiceCard, StatsDisplay } from './components/Diagrams';
import { 
  Menu, X, ArrowRight, Mail, Phone, MapPin, CheckCircle2, 
  Briefcase, Search, Award, Compass, Building2,
  Check, Send, ShieldCheck, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SearchModel, SearchModelType, IndustryPractice, SearchStage, MandateInquiry } from './types';

const heroImage = "/src/assets/images/hero_executive_search_1793371616944.jpg";
const ceoImage = "/src/assets/images/ceo_executive_leader_1793371617854.jpg";
const advisoryImage = "/src/assets/images/advisory_talent_session_1793371618627.jpg";

const searchModels: SearchModel[] = [
  {
    id: 'executive',
    title: 'Executive Search & Board Advisory',
    badge: 'Premier C-Suite Mandates',
    engagementPeriod: '30 - 60 Days',
    description: 'Bespoke, highly confidential search campaigns for Board Members, Chief Executive Officers, Managing Directors, and Regional Business Presidents.',
    idealFor: 'Mission-critical enterprise leadership, confidential transitions, and board reconstitutions.',
    features: [
      'Comprehensive global market intelligence & competitor mapping',
      'Proprietary behavioral and cultural alignment assessments',
      'Strict confidentiality and non-disclosure governance',
      'Full compensation benchmarking and offer negotiation closing',
      '90-day executive integration guarantee'
    ]
  },
  {
    id: 'retained',
    title: 'Retained Search Mandates',
    badge: 'Dedicated Exclusive Partnership',
    engagementPeriod: '45 - 60 Days',
    description: 'Dedicated search assignments with exclusive priority resource allocation to secure hard-to-reach senior leadership and strategic functional heads.',
    idealFor: 'Urgent, high-stakes appointments requiring 100% focused partner engagement.',
    features: [
      'Dedicated Managing Partner & Senior Research Director assigned',
      'Exhaustive multi-market talent pool identification',
      'Curated shortlist of top 5% passive candidates',
      'Detailed candidate comparative leadership dossier',
      'Structured interview scorecards and reference auditing'
    ]
  },
  {
    id: 'contingency',
    title: 'Specialized Contingency Search',
    badge: 'Agile Performance-Driven',
    engagementPeriod: '15 - 30 Days',
    description: 'Rapid, success-aligned recruitment for specialized subject matter experts, technical architects, and mid-to-senior domain leaders.',
    idealFor: 'Fast-growing teams seeking specialized skillsets with zero upfront retainer risk.',
    features: [
      'Performance-based fee model payable upon successful placement',
      'Immediate access to pre-calibrated international talent pipelines',
      'Rigorous technical and domain competency pre-screening',
      'Rapid turnaround with candidate profiles delivered in days',
      'Flexible hiring terms tailored to scaling organizations'
    ]
  },
  {
    id: 'hr-advisory',
    title: 'Strategic HR Consultancy',
    badge: 'Human Capital Architecture',
    engagementPeriod: 'Custom Scope',
    description: 'Transforming organizational efficiency through talent architecture, executive compensation benchmarking, and leadership succession planning.',
    idealFor: 'Firms scaling cross-border operations or refining their organizational design.',
    features: [
      'Organizational structuring and span-of-control optimization',
      'Executive compensation benchmarking across key global hubs',
      'Leadership competency matrix design and capability auditing',
      'Succession planning and talent pipeline vulnerability audits',
      'Strategic workforce planning and employer value proposition (EVP)'
    ]
  }
];

const industryPractices: IndustryPractice[] = [
  {
    id: 'tech',
    title: 'Technology & Digital Infrastructure',
    iconName: 'Cpu',
    description: 'Placing top-tier engineering, product, and digital transformation leaders across high-scale platforms and venture-backed innovators.',
    roles: ['Chief Technology Officer', 'VP of Engineering', 'Head of Product', 'Chief Information Security Officer (CISO)', 'Principal Systems Architect']
  },
  {
    id: 'finance',
    title: 'Financial Services & Private Equity',
    iconName: 'TrendingUp',
    description: 'Advising global asset managers, private equity funds, investment banks, and emerging fintech ventures on leadership capital.',
    roles: ['Chief Financial Officer', 'Private Equity Operating Partner', 'Managing Director - Investments', 'Head of Risk & Compliance', 'Treasury & Capital Markets VP']
  },
  {
    id: 'industrial',
    title: 'Industrial & Advanced Manufacturing',
    iconName: 'Building2',
    description: 'Delivering transformative operational and supply chain leaders for global manufacturing, engineering, and logistics enterprises.',
    roles: ['Chief Operating Officer', 'VP of Global Supply Chain', 'Managing Director - Manufacturing', 'Head of Procurement', 'Plant & Operations Director']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    iconName: 'ShieldPlus',
    description: 'Securing visionary medical, commercial, and research leaders across pharmaceuticals, biotech, medical devices, and healthcare networks.',
    roles: ['Chief Medical Officer', 'VP of Clinical Development', 'Head of Regulatory Affairs', 'Commercial Business Unit Head', 'R&D Operations Director']
  },
  {
    id: 'consumer',
    title: 'Consumer, Retail & High-Growth Brands',
    iconName: 'ShoppingBag',
    description: 'Navigating consumer behavior shifts by identifying omnichannel, brand, and commercial growth leaders.',
    roles: ['Chief Commercial Officer', 'Chief Marketing Officer', 'VP of E-Commerce', 'Managing Director - Emerging Markets', 'Retail Operations VP']
  },
  {
    id: 'corporate',
    title: 'Corporate Functions & Enterprise Services',
    iconName: 'Briefcase',
    description: 'Strengthening the institutional backbone with exceptional corporate affairs, legal, HR, and strategy executives.',
    roles: ['Chief Human Resources Officer (CHRO)', 'General Counsel / Chief Legal Officer', 'VP of Corporate Development', 'Chief of Staff', 'Head of Global Talent']
  }
];

const searchStages: SearchStage[] = [
  {
    step: '01',
    title: 'Mandate Calibration & Role Architecture',
    timing: 'Week 1',
    description: 'We collaborate with key stakeholders to define business objectives, cultural dynamics, and key performance benchmarks, generating a precise candidate brief.',
    deliverables: ['Search Mandate Charter', 'Competency Calibration Matrix', 'Target Industry & Target Company Universe']
  },
  {
    step: '02',
    title: 'Global Market Intelligence & Talent Mapping',
    timing: 'Weeks 1 - 2',
    description: 'Our research division conducts exhaustive cross-border market mapping across global talent centers, identifying high-performing passive candidates.',
    deliverables: ['Global Market Talent Map', 'Target Competitor Organization Scans', 'Longlist of Qualified Leaders']
  },
  {
    step: '03',
    title: 'Confidential Direct Engagement & Vetting',
    timing: 'Weeks 2 - 3',
    description: 'Senior partners initiate discreet direct outreach, conducting structured competency interviews and assessing cultural and motivation alignment.',
    deliverables: ['Confidential Candidate Dossiers', 'Leadership Competency Scores', 'Motivation & Relocation Assessment']
  },
  {
    step: '04',
    title: 'Calibrated Shortlist & Client Interviews',
    timing: 'Weeks 3 - 4',
    description: 'Presentation of 3 to 5 vetted finalists with comparative performance analyses, followed by curated multi-stage client evaluation sessions.',
    deliverables: ['Calibrated Shortlist Matrix', 'Comprehensive Candidate Evaluation Packs', 'Interview Coordination & Feedback Alignment']
  },
  {
    step: '05',
    title: 'Offer Structuring, Negotiation & Closing',
    timing: 'Weeks 5 - 6',
    description: 'We conduct rigorous 360-degree reference checks, structure competitive compensation packages, and mitigate counter-offer risks to seal the agreement.',
    deliverables: ['Executive Reference Reports', 'Compensation Benchmark Validation', 'Signed Offer Agreement & Start Plan']
  },
  {
    step: '06',
    title: '100-Day Integration & Retention Guarantee',
    timing: 'Post-Placement',
    description: 'Our commitment extends well beyond the signing date. We conduct 30, 60, and 90-day integration reviews backed by our replacement guarantee.',
    deliverables: ['Onboarding Success Framework', 'Bi-Monthly Checkpoint Reviews', '90-Day Placement Guarantee Protection']
  }
];

export const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePractice, setActivePractice] = useState(industryPractices[0].id);

  // Mandate Estimator state
  const [estimatorModel, setEstimatorModel] = useState<SearchModelType>('retained');
  const [estimatorSeniority, setEstimatorSeniority] = useState('c-suite');
  const [estimatorGeo, setEstimatorGeo] = useState('global');
  const [estimatorPractice, setEstimatorPractice] = useState('tech');

  // Contact / Inquiry Form state
  const [formData, setFormData] = useState<MandateInquiry>({
    fullName: '',
    workEmail: '',
    phone: '',
    organization: '',
    searchType: 'retained',
    seniorityLevel: 'C-Suite / Board',
    industryPractice: 'Technology & Digital Infrastructure',
    roleTitle: '',
    targetGeography: 'Global / Cross-Border',
    brief: ''
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

  const handleSelectModelFromCard = (modelId: SearchModelType) => {
    setEstimatorModel(modelId);
    setFormData(prev => ({
      ...prev,
      searchType: modelId
    }));
    scrollTo('estimator');
  };

  const handleTransferToInquiry = () => {
    const seniorityMap: Record<string, string> = {
      'c-suite': 'C-Suite / Board Level',
      'vp': 'Vice President / Managing Director',
      'director': 'Director / Functional Head',
      'specialist': 'Senior Subject Specialist'
    };
    const geoMap: Record<string, string> = {
      'global': 'Global / Cross-Border',
      'americas': 'North America',
      'emea': 'Europe, Middle East & Africa',
      'apac': 'Asia-Pacific'
    };
    const practiceObj = industryPractices.find(p => p.id === estimatorPractice);

    setFormData(prev => ({
      ...prev,
      searchType: estimatorModel,
      seniorityLevel: seniorityMap[estimatorSeniority] || 'Executive',
      targetGeography: geoMap[estimatorGeo] || 'Global / Cross-Border',
      industryPractice: practiceObj ? practiceObj.title : prev.industryPractice
    }));

    scrollTo('contact');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.organization.trim()) {
      setFormError('Please fill in your name, work email, and organization.');
      return;
    }
    // Basic email regex validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      setFormError('Please provide a valid corporate email address.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const currentPractice = industryPractices.find(p => p.id === activePractice) || industryPractices[0];

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white bg-[#F8FAFC] text-slate-900">
      
      {/* Top Bar - Strict 3-Zone Contract */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-200' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element, whitespace-nowrap) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group cursor-pointer focus-visible:outline-none"
          >
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              M
            </div>
            <span className="font-serif font-bold text-lg tracking-wide text-slate-900">
              Manvari<span className="text-accent"> Partners</span>
            </span>
          </button>
          
          {/* Zone 2: 4-5 Clean single-line text links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('services')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Search Models
            </button>
            <button onClick={() => scrollTo('industries')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Industries & Skills
            </button>
            <button onClick={() => scrollTo('methodology')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Methodology
            </button>
            <button onClick={() => scrollTo('estimator')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Mandate Estimator
            </button>
            <button onClick={() => scrollTo('leadership')} className="hover:text-accent transition-colors whitespace-nowrap shrink-0">
              Leadership
            </button>
          </div>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-accent text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              Retain Our Firm
            </button>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="lg:hidden text-slate-900 p-2 focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 text-lg font-serif">
          <button onClick={() => scrollTo('services')} className="hover:text-accent">Search Models</button>
          <button onClick={() => scrollTo('industries')} className="hover:text-accent">Industries & Skills</button>
          <button onClick={() => scrollTo('methodology')} className="hover:text-accent">Search Methodology</button>
          <button onClick={() => scrollTo('estimator')} className="hover:text-accent">Mandate Estimator</button>
          <button onClick={() => scrollTo('leadership')} className="hover:text-accent">Leadership</button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="px-6 py-3 bg-accent text-white rounded-md font-sans text-sm font-semibold uppercase tracking-wider"
          >
            Initiate Search Mandate
          </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proposition & Copy */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Clean unboxed text kicker without pill boxes */}
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
                  <span>Global Recruitment & Executive Search Practice</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-slate-600">Retained & Contingency Advisory</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] mb-5" style={{ textWrap: 'balance' }}>
                  We Hire The Best.<br />
                  <span className="text-accent italic font-normal">Global Executive Search</span> & Talent Advisory.
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  We partner with forward-thinking enterprises, multinational organizations, and high-growth ventures worldwide to identify, attract, and place transformative leadership. From retained board and executive search to specialized contingency placements and strategic HR consultancy, we deliver the top 5% of global talent.
                </p>
              </motion.div>

              {/* Guarantees & Commitments */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-200/80"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Retained & Contingency Search Models</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Unconditional 90-Day Placement Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Cross-Border Global Mobility Expertise</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Comprehensive Strategic HR Consultancy</span>
                </div>
              </motion.div>

              {/* CTA Action Block */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="px-7 py-3.5 bg-accent text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-accent-dark transition-all hover:shadow-lg flex items-center gap-2.5 group"
                >
                  <span>Initiate Search Mandate</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button 
                  onClick={() => scrollTo('services')} 
                  className="px-6 py-3.5 bg-white border border-slate-300 text-slate-700 rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-slate-50 transition-colors"
                >
                  View Search Models
                </button>
              </motion.div>
            </div>
            
            {/* Right Column: Hero Visual Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] bg-slate-200 rounded-xl overflow-hidden relative shadow-xl border border-slate-200">
                <img 
                  src={heroImage} 
                  alt="Global executive search advisory boardroom" 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-1">
                    Confidential Mandate Execution
                  </div>
                  <p className="text-white font-serif text-lg leading-snug">
                    "Precision in executive leadership. Benchmarked across worldwide talent corridors."
                  </p>
                </div>
              </div>

              {/* High-Intent Context Box */}
              <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-accent">Core Focus</div>
                  <div className="text-sm font-semibold text-slate-900">Executive Search · Talent Recruitment · HR Advisory</div>
                </div>
                <button 
                  onClick={() => scrollTo('estimator')} 
                  className="text-xs font-semibold text-accent hover:text-accent-dark flex items-center gap-1 shrink-0"
                >
                  <span>Scope Search</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>

          </div>

          {/* Full-Width Key Proof Metrics Strip */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <StatsDisplay />
          </div>

        </div>
      </header>

      <main>
        {/* Core Search Solutions Section */}
        <section id="services" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                Flexible Mandate Architectures
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4" style={{ textWrap: 'balance' }}>
                Executive Search & Recruitment Solutions
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-5"></div>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need confidential C-suite succession, rapid deployment of specialized technical leaders, or organizational HR transformation, our search models are engineered to hire the best.
              </p>
            </div>

            {/* 4 Search Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchModels.map((model, index) => (
                <ServiceCard 
                  key={model.id} 
                  model={model} 
                  index={index} 
                  onSelect={handleSelectModelFromCard}
                />
              ))}
            </div>

            {/* The Manvari Commitment Banner */}
            <div className="mt-16 p-8 bg-slate-900 text-white rounded-xl shadow-md border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-red-300">
                  The Manvari Standard
                </div>
                <h3 className="font-serif text-2xl font-bold">
                  Why Leading Global Boards & CEOs Trust Our Search Practice
                </h3>
                <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                  We maintain strict off-limits discipline, avoiding the multi-firm conflicts of mega-conglomerates. We access the entire market with zero compromise, treating every client search with dedicated partner-led attention.
                </p>
              </div>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-6 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow"
              >
                Schedule Confidential Discussion
              </button>
            </div>
          </div>
        </section>

        {/* Industry Practices & Skillsets Matrix */}
        <section id="industries" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                  Specialized Depth
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900" style={{ textWrap: 'balance' }}>
                  Industries & Functional Skillsets
                </h2>
              </div>
              <p className="text-slate-600 text-sm max-w-md">
                Our global recruitment search practice spans key high-impact sectors, placing leaders and specialized talent who drive immediate enterprise value.
              </p>
            </div>

            {/* Practice Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 scrollbar-none">
              {industryPractices.map(practice => (
                <button
                  key={practice.id}
                  onClick={() => setActivePractice(practice.id)}
                  className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md whitespace-nowrap shrink-0 transition-all ${
                    activePractice === practice.id 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {practice.title}
                </button>
              ))}
            </div>

            {/* Active Practice Detail Display */}
            <div className="bg-white p-8 lg:p-10 rounded-xl border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-accent">
                  Sector Overview
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {currentPractice.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentPractice.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                  <span>Cross-Border Mapping</span>
                  <span aria-hidden="true">·</span>
                  <span>Board & C-Suite</span>
                  <span aria-hidden="true">·</span>
                  <span>Specialized Experts</span>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-6 lg:p-8 rounded-lg border border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Representative Mandates Placed in This Practice
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPractice.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200/80 shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Have a mandate in this practice area?</span>
                  <button 
                    onClick={() => {
                      setEstimatorPractice(currentPractice.id);
                      setFormData(prev => ({
                        ...prev,
                        industryPractice: currentPractice.title
                      }));
                      scrollTo('contact');
                    }}
                    className="text-accent font-semibold hover:text-accent-dark flex items-center gap-1"
                  >
                    <span>Initiate Search</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precision Search Methodology */}
        <section id="methodology" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                  Our Search Rigor
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4" style={{ textWrap: 'balance' }}>
                  The 6-Stage Precision Search Methodology
                </h2>
                <div className="w-16 h-0.5 bg-accent mb-4"></div>
                <p className="text-slate-600 text-base leading-relaxed">
                  We eliminate hiring guesswork through disciplined, data-backed talent identification. Every mandate moves through structured milestones with full transparency and weekly partner reporting.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                  <img 
                    src={advisoryImage} 
                    alt="Executive search advisory strategy session" 
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-5 flex items-end">
                    <p className="text-white text-xs font-serif italic">
                      "Exhaustive candidate vetting and behavioral calibration across every engagement."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchStages.map((stage) => (
                <div key={stage.step} className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-bold text-slate-400 font-mono">
                        {stage.step}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {stage.timing}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables
                    </div>
                    {stage.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <Check size={13} className="text-accent shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Search Mandate Estimator */}
        <section id="estimator" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                Mandate Architecture Calculator
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4" style={{ textWrap: 'balance' }}>
                Scope Your Search Engagement
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm">
                Estimate search parameters, delivery milestones, and team allocation based on your organizational requirements.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Configuration Controls */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Step 1: Search Model */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      1. Engagement Model
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'retained', label: 'Retained Search', sub: 'Exclusive priority partner' },
                        { id: 'contingency', label: 'Contingency Search', sub: 'Success-driven placement' },
                        { id: 'executive', label: 'Executive & Board', sub: 'Confidential C-suite' },
                        { id: 'hr-advisory', label: 'HR Advisory', sub: 'Organizational consulting' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEstimatorModel(item.id as SearchModelType)}
                          className={`p-3 text-left rounded-lg border transition-all ${
                            estimatorModel === item.id 
                              ? 'border-accent bg-accent/5 ring-1 ring-accent' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{item.label}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Seniority Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      2. Target Seniority
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'c-suite', label: 'C-Suite / Board' },
                        { id: 'vp', label: 'VP / MD' },
                        { id: 'director', label: 'Director / Head' },
                        { id: 'specialist', label: 'Lead Specialist' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEstimatorSeniority(item.id)}
                          className={`py-2 px-3 text-xs font-semibold rounded-md text-center border transition-all ${
                            estimatorSeniority === item.id 
                              ? 'bg-slate-900 text-white border-slate-900' 
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Geographic Scope */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      3. Target Geographic Placement Horizon
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'global', label: 'Global / Multi-Region' },
                        { id: 'americas', label: 'Americas' },
                        { id: 'emea', label: 'EMEA' },
                        { id: 'apac', label: 'Asia-Pacific' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEstimatorGeo(item.id)}
                          className={`py-2 px-3 text-xs font-semibold rounded-md text-center border transition-all ${
                            estimatorGeo === item.id 
                              ? 'bg-slate-900 text-white border-slate-900' 
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scope Summary Preview Box */}
                <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
                      Estimated Mandate Blueprint
                    </div>
                    <div className="text-xl font-serif font-bold text-slate-900 mb-4 capitalize">
                      {estimatorModel.replace('-', ' ')} Engagement
                    </div>

                    <div className="space-y-3.5 mb-6 text-xs text-slate-700">
                      <div className="flex justify-between py-1.5 border-b border-slate-200">
                        <span className="text-slate-500">Shortlist Target Timeline:</span>
                        <span className="font-semibold text-slate-900">
                          {estimatorModel === 'contingency' ? '2 - 3 Weeks' : '4 - 5 Weeks'}
                        </span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-200">
                        <span className="text-slate-500">Talent Universe Scanned:</span>
                        <span className="font-semibold text-slate-900">
                          {estimatorModel === 'executive' ? '80 - 140 Top Executives' : '150 - 250 Candidates'}
                        </span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-200">
                        <span className="text-slate-500">Practice Lead:</span>
                        <span className="font-semibold text-slate-900">Dedicated Managing Partner</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-200">
                        <span className="text-slate-500">Placement Guarantee:</span>
                        <span className="font-semibold text-accent">90-Day Free Replacement</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded border border-slate-200 text-xs text-slate-600 leading-relaxed mb-6">
                      <span className="font-semibold text-slate-900">Search Guarantee: </span>
                      {estimatorModel === 'contingency'
                        ? 'Performance-based engagement with zero upfront fee; complete search execution fee payable upon formal placement.'
                        : 'Full exclusive partner commitment with exhaustive confidential market intelligence, weekly status briefings, and reference auditing.'}
                    </div>
                  </div>

                  <button
                    onClick={handleTransferToInquiry}
                    className="w-full py-3.5 px-4 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <span>Proceed With This Mandate Brief</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        {/* Requirement: Mention that the CEO has global experience in this field without stating it directly */}
        <section id="leadership" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                Executive Leadership
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4" style={{ textWrap: 'balance' }}>
                Leadership & Global Pedigree
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm">
                Anchored in decades of executive talent strategy, cross-border appointments, and institutional human capital advisory.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                
                {/* Refined Executive Portrait */}
                <div className="w-48 h-48 shrink-0 relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-slate-200">
                    <img 
                      src={ceoImage} 
                      alt="S Agarwal, CEO & Managing Partner of Manvari Partners" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent text-white p-1.5 rounded-md shadow">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                {/* Profile Narrative with Global Executive Pedigree subtly woven in */}
                <div className="text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">S Agarwal</h3>
                    <div className="text-accent font-semibold tracking-wider text-xs uppercase mt-1">
                      CEO & Managing Partner · Manvari Partners
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    With an expansive career advising boards and multinational enterprises on executive talent acquisition across major business corridors in North America, Europe, the Middle East, and Asia-Pacific, S Agarwal brings an international perspective to executive search and organizational advisory. Having orchestrated cross-border C-suite appointments, regional expansion buildouts, and talent architecture for Fortune 500s, sovereign investors, and high-growth innovators across multiple continents, our leadership guarantees that every search mandate has direct access to the world’s most sought-after leadership capital.
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                      Cross-Border Search Mandates
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                      Board & C-Suite Appointments
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                      Retained & Contingency Search
                    </span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                      Strategic HR Advisory
                    </span>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
                    "Finding right talent for your mission-critical roles, solving your most complex talent challenges."
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Client Mandate Inquiry & Contact Section */}
        <section id="contact" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                Confidential Engagement
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4" style={{ textWrap: 'balance' }}>
                Initiate a Search Mandate
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
              <p className="text-slate-600 text-base">
                Ready to secure transformative leadership or discuss your organization's recruitment and HR advisory needs? Connect directly with our partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              
              {/* Left Column: Client Submission Form */}
              <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-xl border border-slate-200 shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Mandate Brief Received
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Manvari Partners. A Senior Managing Partner will review your talent specifications and reach out within 24 hours to coordinate a confidential discovery session.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            fullName: '',
                            workEmail: '',
                            phone: '',
                            organization: '',
                            searchType: 'retained',
                            seniorityLevel: 'C-Suite / Board',
                            industryPractice: 'Technology & Digital Infrastructure',
                            roleTitle: '',
                            targetGeography: 'Global / Cross-Border',
                            brief: ''
                          });
                        }}
                        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                        Mandate Details & Specifications
                      </h3>
                      <p className="text-xs text-slate-500">
                        All communications are strictly covered under candidate search confidentiality.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="e.g. e.vance@company.com"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Apex Global Corp"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +1 (555) 019-2834"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Preferred Search Model
                        </label>
                        <select
                          value={formData.searchType}
                          onChange={e => setFormData({ ...formData, searchType: e.target.value as SearchModelType })}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent bg-white"
                        >
                          <option value="retained">Retained Executive Search</option>
                          <option value="contingency">Specialized Contingency Search</option>
                          <option value="executive">Board & C-Suite Search</option>
                          <option value="hr-advisory">Strategic HR Consultancy</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Target Role Title
                        </label>
                        <input
                          type="text"
                          value={formData.roleTitle}
                          onChange={e => setFormData({ ...formData, roleTitle: e.target.value })}
                          placeholder="e.g. Chief Operating Officer"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Mandate Context / Key Skillsets Required
                      </label>
                      <textarea
                        rows={3}
                        value={formData.brief}
                        onChange={e => setFormData({ ...formData, brief: e.target.value })}
                        placeholder="Briefly describe the mandate requirements, geography, key competencies, and timeline..."
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <Send size={15} />
                      <span>Submit Confidential Mandate Brief</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Contact Info (Exact details preserved) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Email Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-accent border border-red-100 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Direct Executive Email
                    </div>
                    <div className="text-xs text-slate-500 mb-1">For confidential mandate briefings</div>
                    <a 
                      href="mailto:sugandha.agarwal@gmail.com" 
                      className="text-sm sm:text-base font-semibold text-accent hover:text-accent-dark transition-colors break-all"
                    >
                      sugandha.agarwal@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-accent border border-red-100 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Direct Telephone Line
                    </div>
                    <div className="text-xs text-slate-500 mb-1">Mon - Fri from 9:00 AM to 6:00 PM IST</div>
                    <a 
                      href="tel:+919980206008" 
                      className="text-base font-semibold text-accent hover:text-accent-dark transition-colors font-mono tabular-nums"
                    >
                      +91-9980206008
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-accent border border-red-100 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Registered Headquarters
                    </div>
                    <div className="text-sm font-bold text-slate-900">Manvari Partners</div>
                    <address className="text-xs not-italic text-slate-600 mt-1 leading-relaxed">
                      737, 3rd B main, ISRO layout<br />
                      Bengaluru, Karnataka, India, 560078
                    </address>
                  </div>
                </div>

                {/* Confidentiality Commitment Callout */}
                <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    <ShieldCheck size={16} />
                    <span>Complete Discretion</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All candidate identities, client organizational structures, and strategic leadership transitions are protected by bilateral non-disclosure protocols.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center text-white font-serif font-bold text-base">
                  M
                </div>
                <span className="font-serif font-bold text-lg tracking-wide text-white">
                  Manvari<span className="text-accent"> Partners</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Premier global recruitment and executive search advisory firm. Partnering with visionary enterprises to hire the best through retained, contingency, and strategic HR consulting solutions.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Search Practices
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Retained Executive Search</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Contingency Search</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Board & C-Suite Advisory</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Strategic HR Consultancy</button></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Global Inquiries
              </div>
              <div className="text-xs text-slate-400 space-y-1.5">
                <div>Email: <a href="mailto:sugandha.agarwal@gmail.com" className="text-slate-300 hover:text-white">sugandha.agarwal@gmail.com</a></div>
                <div>Phone: <a href="tel:+919980206008" className="text-slate-300 hover:text-white">+91-9980206008</a></div>
                <div>Headquarters: Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} Manvari Partners. All rights reserved. Global Executive Search & HR Advisory.
            </div>
            <div className="flex gap-6">
              <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Search Models</button>
              <button onClick={() => scrollTo('methodology')} className="hover:text-white transition-colors">Methodology</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Mandate Inquiries</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;