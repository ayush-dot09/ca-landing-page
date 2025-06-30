'use client';

import React from 'react';

// Company logo data with enhanced designs and single positions
const companyLogos = [
  {
    id: 'jpmorgan',
    name: 'JP Morgan Chase & Co',
    component: () => (
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-200 min-w-[140px] hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">JP MORGAN</div>
          <div className="text-xs text-slate-600 uppercase tracking-wider">CHASE & CO.</div>
        </div>
      </div>
    ),
    position: { top: '15%', left: '0%' }
  },
  {
    id: 'dell',
    name: 'Dell Technologies',
    component: () => (
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-200 min-w-[140px] hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">DELL</div>
          <div className="text-xs text-slate-500 uppercase tracking-wider">TECHNOLOGIES</div>
        </div>
      </div>
    ),
    position: { top: '12%', right: '4%' }
  },
  {
    id: 'wipro',
    name: 'Wipro',
    component: () => (
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-200 min-w-[100px] hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="text-sm font-bold text-orange-500 lowercase">wipro</div>
          <div className="w-6 h-0.5 bg-orange-500 mx-auto mt-1"></div>
        </div>
      </div>
    ),
    position: { top: '50%', left: '0%', transform: 'translateY(-50%)' }
  },
  {
    id: 'infosys',
    name: 'Infosys',
    component: () => (
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-200 min-w-[100px] hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="text-sm font-bold text-blue-700">Infosys</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide">LIMITED</div>
        </div>
      </div>
    ),
    position: { bottom: '24%', left: '4%' }
  },
  {
    id: 'accenture',
    name: 'Accenture',
    component: () => (
      <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-200 min-w-[120px] hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="text-sm font-bold text-purple-600 lowercase">accenture</div>
          <div className="text-lg text-purple-600 leading-none font-bold">></div>
        </div>
      </div>
    ),
    position: { bottom: '16%', right: '8%' }
  }
];

interface CompanyLogosProps {
  className?: string;
}

export default function CompanyLogos({ className = '' }: CompanyLogosProps) {
  return (
    <div className={`absolute inset-0 z-20 pointer-events-none hidden lg:block ${className}`}>
      {companyLogos.map((logo, index) => {
        const LogoComponent = logo.component;
        return (
          <div
            key={logo.id}
            className="absolute animate-in fade-in duration-1000"
            style={{
              top: logo.position.top,
              left: logo.position.left,
              right: logo.position.right,
              bottom: logo.position.bottom,
              transform: logo.position.transform,
              animationDelay: `${index * 200}ms`, // Stagger the animations
            }}
          >
            <LogoComponent />
          </div>
        );
      })}
    </div>
  );
}
