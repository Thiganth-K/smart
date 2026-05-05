import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, variant = 'dark' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} suppressHydrationWarning>
      <div className="flex-shrink-0 w-10 h-10">
        <Image 
          src="/logo.png" 
          alt="SMART Icon" 
          width={40} 
          height={40} 
          className="w-full h-full object-contain"
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center text-xl brand-heading leading-none">
            <span className={variant === 'light' ? 'text-white' : 'text-primary-navy'}>SM</span>
            <span className="text-accent-red mx-0.5">
              <svg 
                viewBox="0 0 24 24" 
                className="h-[16px] w-auto"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="6" 
                strokeLinecap="butt" 
                strokeLinejoin="miter"
              >
                <path d="M2 22L12 2L22 22" />
              </svg>
            </span>
            <span className={variant === 'light' ? 'text-white' : 'text-primary-navy'}>RT</span>
          </div>
          <div className={`text-[6px] brand-subtitle leading-none mt-1 whitespace-nowrap ${variant === 'light' ? 'text-white/50' : 'text-slate-400'}`}>
            Smarter Assessment. Stronger Future.
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;

