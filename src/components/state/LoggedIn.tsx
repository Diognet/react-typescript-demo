import { useState } from 'react';

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const hanleLogin = () => {
    setisLoggedIn(true);
  };

  const hanleLogout = () => {
    setisLoggedIn(false);
  };

  return (
    <div>
      <button onClick={hanleLogin}>Login</button>
      <button onClick={hanleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'Logged out'}</div>
    </div>
  );
};
