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
        className="w-full max-w-[200px] h-auto object-contain hover:scale-105 transition-transform duration-300"
      />

    </div>
  );
};

export default Logo;