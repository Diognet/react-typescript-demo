import React from 'react';

type Textprops = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'prymary' | 'secondary';
  children?: React.ReactNode;
  as?: React.ElementType;
};

export const Text = ({ size, color, children, as }: Textprops) => {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
