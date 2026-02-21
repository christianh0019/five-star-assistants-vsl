import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  // variant='dark' is for light backgrounds
  // variant='light' is for dark backgrounds

  return (
    <div className={`flex flex-col items-center ${className}`}>

      {/* Logo Image */}
      <img
        src={variant === 'light' ? "/logo-white.png" : "/logo.png"}
        alt="Five Star Assistants Logo"
        className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300 origin-left"
      />

    </div>
  );
};

export default Logo;