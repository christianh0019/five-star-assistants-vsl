import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "font-heading font-bold rounded shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold";
  
  const variants = {
    primary: "bg-gold hover:bg-gold-hover text-navy py-4 px-8 text-xl md:text-2xl uppercase tracking-wide",
    secondary: "bg-gold hover:bg-gold-hover text-navy py-3 px-6 text-lg uppercase tracking-wide",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;