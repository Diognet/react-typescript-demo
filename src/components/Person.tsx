import { PersontProps } from './Person.types';

export const Person = (props: PersontProps) => {
  return (
    <div>
      name: {props.name.first} {props.name.last}
    </div>
  );
};
