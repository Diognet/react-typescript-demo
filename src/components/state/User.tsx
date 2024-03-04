import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: 'Diognet',
      email: 'diognet.up@gmail.com',
    });
  };

  const handleLogaut = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogaut}>Logaut</button>
      <div>User name is</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};
