import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
  tagline?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", tagline }) => {
  return (
    <div className={`flex flex-col items-start ${className}`} suppressHydrationWarning>
      <div className="flex items-center gap-5">
        <div className="w-7 h-7 flex-shrink-0 relative overflow-hidden rounded-md">
          <Image 
            src="/hiresapien1.png" 
            alt="Icon" 
            width={120} 
            height={32} 
            className="h-full w-auto object-cover object-left scale-[1.7] translate-x-[2px]"
            priority
          />
        </div>
        <div className="flex items-baseline font-sora text-lg font-bold tracking-tight">
          <span className="text-white">H</span>
          <span className="text-white relative">
            ı
            <span className="absolute left-[2.5px] top-[2.5px] w-[3px] h-[3px] bg-[#7A5CFF] rounded-full" />
          </span>
          <span className="text-white">re</span>
          <span className="text-[#7A5CFF] ml-0.5">sap</span>
          <span className="text-[#7A5CFF] relative">
            ı
            <span className="absolute left-[2.5px] top-[2.5px] w-[3px] h-[3px] bg-[#7A5CFF] rounded-full" />
          </span>
          <span className="text-[#7A5CFF]">en</span>
        </div>
      </div>
      {tagline && (
        <div className="mt-2 w-full">
          <p className="text-[7px] font-bold tracking-[0.08em] uppercase text-white/30 leading-tight">
            {tagline}
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;

