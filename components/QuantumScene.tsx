/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// Replaced 3D scene with a lightweight SVG background pattern
export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50">
      <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
      </svg>
      
      {/* Geometric Patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent-DEFAULT/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary-DEFAULT/5 blur-3xl"></div>
      
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.4
      }}></div>
    </div>
  );
};