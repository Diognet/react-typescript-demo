import React from 'react';

type ButtonProps = {
  handelClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handelClick(event, 1)}> Click</button>
  );
};
