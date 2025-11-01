import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'yellow' | 'blue' | 'red' | 'ghost';
};

export const Button: React.FC<ButtonProps> = ({ color = 'yellow', className, children, ...props }) => {
  const colorClass = color === 'yellow' ? '' : ` ${color}`;
  return (
    <button className={`btn${colorClass}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </button>
  );
};
