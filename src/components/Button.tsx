import React from "react";


type ButtonProps = { handelClick: () => void };

export const Button = (props: ButtonProps) => {
  return <button onClick= {props.handelClick}> Click</button>;
};
