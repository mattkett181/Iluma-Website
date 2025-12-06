import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Brain/Bulb Icon */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 36C20 36 23 33 23 28V24M20 36C20 36 17 33 17 28V24" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 36V40" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28.5 24C31.5 24 34 21.5 34 17C34 10 28 4 20 4C12 4 6 10 6 17C6 21.5 8.5 24 11.5 24" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* The "Spark" or "Idea" part in Gold */}
        <circle cx="20" cy="14" r="3" className="fill-iluma-gold animate-pulse" /> 
        <path d="M20 17V24" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-bold text-2xl tracking-widest text-iluma-navy">ILUMA</span>
    </div>
  );
};