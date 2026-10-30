/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50/80 pointer-events-none">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      
      {/* Executive Maron/Slate ambient light glow */}
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-slate-900/5 blur-[100px]" />
      
      {/* Subtle vignette border */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/90" />
    </div>
  );
};