import React from 'react';

export const Card: React.FC<React.PropsWithChildren<{ title?: string; className?: string }>> = ({ title, className, children }) => {
  return (
    <div className={`card${className ? ` ${className}` : ''}`}>
      {title ? <div className="title">{title}</div> : null}
      <div className="body">{children}</div>
    </div>
  );
};
