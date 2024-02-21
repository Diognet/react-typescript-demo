import React from 'react';

type IntputProps = {
  value: string;
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: IntputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handelChange} />
  );
};
