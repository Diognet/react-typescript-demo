type HeandingProps = {
  children: string;
};

export const Heanding = (props: HeandingProps) => {
  return <h2>{props.children}</h2>;
};
