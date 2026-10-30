/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardItemProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export const ServiceCardItem: React.FC<ServiceCardItemProps> = ({ number, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-white p-8 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
    >
      <div>
        <div className="text-xs font-mono font-bold text-accent mb-3 tracking-wider uppercase">
          0{number}
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};