import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg transition-all duration-300 font-medium tracking-wide';
  
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-light shadow-luxury hover:shadow-luxury-lg',
    secondary: 'bg-charcoal text-white hover:bg-charcoal-light',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
