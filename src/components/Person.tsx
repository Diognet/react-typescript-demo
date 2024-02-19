type PersontProps = {
  name: { first: string; last: string };
};

export const Person = (props: PersontProps) => {
  return (
    <div>
      name: {props.name.first} {props.name.last}
    </div>
  );
};
