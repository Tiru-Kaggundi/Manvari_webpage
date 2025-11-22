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

// Placeholder for compatibility, returns null as we don't need the second scene
export const QuantumComputerScene: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-100 rounded-xl overflow-hidden relative">
       <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-64 h-64 border-4 border-primary-light rounded-full flex items-center justify-center">
             <div className="w-48 h-48 border-4 border-accent-DEFAULT rounded-full"></div>
          </div>
       </div>
    </div>
  );
};