import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", showText = true, variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-primary-navy' : 'text-white';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-sm"
      >
        {/* Hexagonal Outer Shape */}
        <path
          d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
          className="fill-accent-red"
        />
        {/* Inner S Shape */}
        <path
          d="M30 35H70V45H45V55H70V75H30V65H55V60H30V35Z"
          fill="white"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-black text-3xl tracking-tighter flex items-baseline ${textColor}`}>
            SM
            <div className="mx-[1px] relative h-[22px] w-[18px] inline-block">
               <svg viewBox="0 0 20 20" className="absolute bottom-0 fill-accent-red">
                 <path d="M0 20L10 0L20 20H15L10 10L5 20H0Z" />
               </svg>
            </div>
            RT
          </div>
          <div className={`text-[7px] font-bold tracking-[0.2em] opacity-90 uppercase ${textColor} mt-1`}>
            Smarter Assessment. Stronger Future.
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
