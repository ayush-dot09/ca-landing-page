'use client';

import React from 'react';

// Company data for the moving logos
const companies = [
  'Deloitte', 'PwC', 'KPMG', 'EY', 'Goldman Sachs', 'JP Morgan',
  'McKinsey', 'BCG', 'Bain', 'Accenture', 'TCS', 'Infosys',
  'Wipro', 'HCL', 'Cognizant', 'IBM', 'Microsoft', 'Google'
];

interface MovingCompanyLogosProps {
  className?: string;
}

export default function MovingCompanyLogos({ className = '' }: MovingCompanyLogosProps) {
  // Duplicate the companies array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className={`relative overflow-hidden bg-gray-50 py-8 ${className}`}>
      {/* Moving container */}
      <div className="flex animate-scroll space-x-8">
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 hover:shadow-md transition-shadow duration-300"
            style={{ minWidth: '160px' }}
          >
            <div className="text-center">
              <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">
                {company}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
