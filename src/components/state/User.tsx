import { useState } from 'react';

type AutUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AutUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setUser({
      name: 'Morgan',
      email: 'morgan.up.dn@gmail.com',
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const toggleLogin = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      {isLoggedIn ? (
        <div>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </div>
      ) : (
        <div>Please log in to see user details.</div>
      )}
    </div>
  );
};