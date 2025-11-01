import React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: 'yellow' | 'blue' | 'red';
};

export const Badge: React.FC<BadgeProps> = ({ color = 'yellow', className, children, ...props }) => {
  const colorClass = color === 'yellow' ? 'yellow' : color;
  return (
    <span className={`badge ${colorClass}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </span>
  );
};
