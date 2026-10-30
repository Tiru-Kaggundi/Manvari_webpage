/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SearchModel } from '../types';

interface ServiceCardProps {
  model: SearchModel;
  index: number;
  onSelect: (modelId: SearchModel['id']) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ model, index, onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white p-8 rounded-xl border border-slate-200/80 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent font-sans">
            {model.badge}
          </span>
          <span className="text-xs font-mono tabular-nums text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
            {model.engagementPeriod}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
          {model.title}
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm mb-6">
          {model.description}
        </p>

        <div className="p-3.5 bg-slate-50 rounded-lg mb-6 border border-slate-100">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
            Best Suited For
          </div>
          <div className="text-sm font-medium text-slate-800">
            {model.idealFor}
          </div>
        </div>

        <div className="space-y-2.5 mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Mandate Scope & Guarantees
          </div>
          {model.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
              <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(model.id)}
        className="w-full py-3 px-4 bg-slate-50 hover:bg-accent text-slate-800 hover:text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200 hover:border-accent"
      >
        <span>Configure This Search</span>
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
};

export const StatsDisplay: React.FC = () => {
  const stats = [
    { label: "Mandate Completion Rate", value: "98.4%", sub: "Across Board & Executive Appointments" },
    { label: "Average Shortlist Delivery", value: "45 Days", sub: "Confidential Market Mapping Included" },
    { label: "Global Placement Reach", value: "24+ Countries", sub: "Americas, EMEA & Asia-Pacific" },
    { label: "24-Month Retention Rate", value: "96.2%", sub: "Backed by 90-Day Placement Guarantee" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-1 tabular-nums font-mono">
              {stat.value}
            </div>
            <div className="text-xs font-bold tracking-wider uppercase text-accent mb-2">
              {stat.label}
            </div>
          </div>
          <div className="text-xs text-slate-600">
            {stat.sub}
          </div>
        </div>
      ))}
    </div>
  );
};