import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function ServiceCard({ title, description, icon, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-cream p-8 lg:p-10 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:-translate-y-1' : ''
      }`}
    >
      {icon && <div className="text-gold mb-4">{icon}</div>}
      <h3 className="text-2xl lg:text-3xl font-serif mb-3 text-charcoal">{title}</h3>
      <p className="text-charcoal/70 leading-relaxed">{description}</p>
    </div>
  );
}
