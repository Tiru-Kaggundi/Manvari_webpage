/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, ShieldCheck, BarChart, Globe } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:border-accent/30 group"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-primary-light group-hover:text-accent group-hover:bg-accent/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

export const StatsDisplay: React.FC = () => {
  const stats = [
    { label: "Clients Served", value: "50+", icon: <Users size={20} /> },
    { label: "Revenue Impact", value: "$200M", icon: <TrendingUp size={20} /> },
    { label: "Success Rate", value: "98%", icon: <Target size={20} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg border border-slate-100 shadow-sm">
          <div className="text-accent mb-2 opacity-80">{stat.icon}</div>
          <div className="text-3xl font-serif font-bold text-slate-900 mb-1">{stat.value}</div>
          <div className="text-xs font-bold tracking-widest uppercase text-slate-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Export icons for use in main app if needed
export const StrategyIcon = () => <BarChart size={24} />;
export const GlobalIcon = () => <Globe size={24} />;
export const SecurityIcon = () => <ShieldCheck size={24} />;