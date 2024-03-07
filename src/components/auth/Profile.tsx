type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile to component. Name is {name}</div>;
};

export default Profile;
