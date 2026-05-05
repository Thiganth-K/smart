import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  return (
    <div className={`flex items-center ${className}`} suppressHydrationWarning>
      <Image 
        src="/image.png" 
        alt="SMART Full Logo" 
        width={200} 
        height={50} 
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default Logo;

