import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  color?: 'dark' | 'light';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle,
  alignment = 'center',
  color = 'dark',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const colorClasses = {
    dark: 'text-[#1A237E]',
    light: 'text-white',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${colorClasses[color]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${color === 'dark' ? 'text-gray-600' : 'text-gray-200'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-[#FF6B2B] mt-6 rounded-full ${
        alignment === 'center' ? 'mx-auto' : 
        alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
    </div>
  );
};

export default SectionHeader;