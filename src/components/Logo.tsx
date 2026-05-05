import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-16 w-full", showText = true, variant = 'dark' }) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`flex items-center justify-center ${className}`} suppressHydrationWarning>
      <Image 
        src={mounted ? `/logo.png?v=${Date.now()}` : '/logo.png'} 
        alt="SMART Logo" 
        width={400} 
        height={120} 
        className="w-full h-auto object-contain"
        priority
        unoptimized
      />
    </div>
  );
};

export default Logo;

