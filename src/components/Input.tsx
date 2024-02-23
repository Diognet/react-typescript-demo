import React from 'react';

type IntputProps = {
  value: string;
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handelChange }: IntputProps) => {
  return <input type="text" value={value} onChange={handelChange} />;
};
